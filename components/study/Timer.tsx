'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Timer.module.css';
import { Flex, Text } from '@radix-ui/themes';
import { useMediaQuery } from 'react-responsive';
import TimerToggleBtn from './TimerToggleBtn';
import { Subject } from '@/types/studyType';
import { formatTime, getCurrentDate } from '@/utils/formatTimeUtils';
import { useSubjectStore } from '@/store/subjectStore';
import Cookies from 'js-cookie';
import { ErrorResponse } from '@/types/commonType';

interface ITimer {
  maxTime: number;
  currentTime: number;
  onSave: (time: number, subjects: Subject[]) => Promise<ErrorResponse | null>;
}

const loadingColor = '#8274EA';
const innerStroke = 2.5;

export default function Timer({ maxTime, currentTime, onSave }: ITimer) {
  const isMobile = useMediaQuery({ query: '(max-width: 680px)' });
  const { selectedSubjects, selectSubject } = useSubjectStore();
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(currentTime); // 초 단위
  const [progress, setProgress] = useState((currentTime / maxTime) * 100);
  const [remainingTime, setRemainingTime] = useState(maxTime - (currentTime % maxTime));

  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastSaveDateRef = useRef<string | null>(null); // 마지막 저장 날짜 -> 중복 저장 방지

  const outerRadius = isMobile ? 45 : 51.7;
  const innerRadius = isMobile ? 41 : 49.2;

  const handleTimer = async (time: number, subjects: Subject[]) => {
    const response = await onSave(time, subjects);

    if (response!.error) {
      alert(response!.error.message);
    } else {
      alert('기록이 저장되었습니다.');
    }
  };

  const checkAndSaveAt5AM = () => {
    const now = new Date();
    const currentDate = now.toDateString();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (hours === 5 && (minutes === 0 || minutes === 1) && currentDate !== lastSaveDateRef.current) {
      const currentTimeInSeconds = Math.floor((Date.now() - startTimeRef.current!) / 1000);

      handleTimer(currentTimeInSeconds, selectedSubjects);
      lastSaveDateRef.current = currentDate;

      setTime(0);
      setProgress(0);
      startTimeRef.current = Date.now();

      console.log('Saved at 5AM');
      alert('새로운 날이 시작되었습니다. 기록이 저장되었습니다.');
    }
  };

  const handleToggle = () => {
    setIsActive((prev) => !prev);

    if (isActive) {
      handleTimer(time, selectedSubjects);
    }
  };

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now() - time * 1000;
      const animate = () => {
        const now = Date.now(); // 현재 시간
        const elapsedTime = (now - startTimeRef.current!) / 1000; // 경과 시간
        const newTime = Math.floor(elapsedTime); // 소수점 버림
        const newProgress = ((elapsedTime % maxTime) / maxTime) * 100; // 진행률

        setTime(newTime);
        setProgress(newProgress);
        setRemainingTime(maxTime - (newTime % maxTime));

        if (newTime % 30 === 0) {
          // 30초마다 체크
          checkAndSaveAt5AM();
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, maxTime, time]);

  const flag = useRef(false);

  useEffect(() => {
    if (selectedSubjects.length === 0 && !flag.current) {
      const cookieValue = Cookies.get('selectedSubjects') || '[]'; // 쿠키에서 값 가져오기
      try {
        JSON.parse(cookieValue).forEach((subject: Subject) => {
          selectSubject(subject);
          flag.current = true;
        });
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    }
  });

  console.log(new Date());

  return (
    <Flex direction="column" align="center" justify="center">
      <div className={styles.container}>
        <Text as="p" className={styles.title} size="4" weight="medium" align="center">
          다음 레벨업까지
        </Text>
        <Text as="p" className={styles.remaining_time} size="4" weight="medium" align="center">
          {remainingTime > 0 ? formatTime(remainingTime) : formatTime(maxTime)}
        </Text>

        <div className={styles.relative_wrapper}>
          <div className={styles.svg_container}>
            <svg className={styles.svg} viewBox="0 0 110 100">
              <circle cx="55" cy="50" r={outerRadius} stroke="#F0F0FE" strokeWidth="6.5" fill="none" />
              <circle cx="55" cy="50" r={innerRadius} stroke="#DBDBFF" strokeWidth={innerStroke} fill="none" />
              {(isActive || time > 0) && (
                <circle
                  cx="55"
                  cy="50"
                  r={innerRadius}
                  stroke={loadingColor}
                  strokeWidth={innerStroke}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * innerRadius} // circumference
                  strokeDashoffset={2 * Math.PI * innerRadius * (1 - progress / 100)} // circumference * (1 - progress)
                  className={styles.svg_circle}
                  transform="rotate(-90 55 50)"
                />
              )}
            </svg>
          </div>

          <Flex
            align="center"
            justify="center"
            direction="column"
            position="absolute"
            inset="0"
            gap="5px"
            className={styles.timer_wrapper}
          >
            <Text className={styles.time}>{formatTime(time)}</Text>

            <TimerToggleBtn isActive={isActive} onToggle={handleToggle} />
          </Flex>
        </div>
      </div>

      {/* 공부중인 과목 리스트 */}
      <Flex
        justify="center"
        align="center"
        mb="60px"
        mt={isMobile ? '0px' : '38px'}
        width={isMobile ? '90%' : '80%'}
        wrap="wrap"
        height="auto"
      >
        {selectedSubjects.map((subject, index) => (
          <div key={index} className={styles.subject_item}>
            <Text as="p" size={isMobile ? '2' : '3'} className={styles.subject_item_text}>
              # {subject.name}
            </Text>
          </div>
        ))}
      </Flex>
    </Flex>
  );
}
