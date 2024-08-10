'use client';

import { Box, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileHeader.module.css';

export default function MobileHeader() {
  const pathname = usePathname();

  return (
    <Box px="5" asChild>
      <footer className={styles.footer}>
        <Flex justify="center" align="center" asChild>
          <ul>
            <li>
              <Link href="/study" className={pathname.startsWith('/study') ? `${styles.active}` : ''}>
                <div className={styles.svg}>
                  <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      opacity="0.4"
                      d="M0.257375 18.5421C0.834193 20.0208 2.23953 20.9752 3.82316 20.9752H10.0109C11.605 20.9752 12.9998 20.0208 13.5766 18.5421C14.1535 17.0528 13.7549 15.4063 12.5803 14.3366L8.33283 10.4876H5.49069L1.2537 14.3366C0.0790862 15.4063 -0.308956 17.0528 0.257375 18.5421Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M5.00744 16.927H8.82493C9.22346 16.927 9.53809 16.6019 9.53809 16.2138C9.53809 15.8153 9.21297 15.5007 8.82493 15.5007H5.00744C4.60891 15.5007 4.29428 15.8258 4.29428 16.2138C4.29428 16.6019 4.6194 16.927 5.00744 16.927Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M0.256511 2.43312C0.833329 0.954372 2.23867 0 3.8223 0H10.0099C11.5936 0 12.9989 0.954372 13.5757 2.43312C14.142 3.92236 13.754 5.56892 12.5689 6.63865L8.33197 10.4876H5.48982L1.25283 6.63865C0.0782207 5.56892 -0.30982 3.92236 0.256511 2.43312ZM5.0074 5.48502H8.82488C9.22336 5.48502 9.53799 5.1599 9.53799 4.77186C9.53799 4.38382 9.21287 4.0587 8.82488 4.0587H5.0074C4.60887 4.0587 4.29424 4.38382 4.29424 4.77186C4.29424 5.1599 4.61935 5.48502 5.0074 5.48502Z"
                      fill="#1C274C"
                    />
                  </svg>
                </div>
                <Text as="p" size="2" weight="medium" mt="1">
                  공부하기
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/ranking" className={pathname.startsWith('/ranking') ? `${styles.active}` : ''}>
                <div className={styles.svg}>
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      opacity="0.5"
                      d="M11.0003 15.475L6.85159 19.7705C6.25744 20.3858 5.96037 20.6933 5.70879 20.7998C5.13551 21.0424 4.49958 20.8348 4.19802 20.3067C4.06568 20.0749 4.02444 19.6569 3.94196 18.8209C3.89539 18.3489 3.8721 18.1128 3.80143 17.9151C3.6432 17.4726 3.31072 17.1284 2.88329 16.9645C2.69238 16.8913 2.46443 16.8672 2.00857 16.8189C1.20112 16.7336 0.797365 16.6909 0.573531 16.5538C0.0634909 16.2416 -0.136979 15.5832 0.0972729 14.9896C0.200071 14.7291 0.497145 14.4215 1.09129 13.8064L3.80143 11.0002L5.1635 9.63815L11.0003 15.475L16.8371 9.63815L18.1991 11.0002L20.9093 13.8064C21.5035 14.4215 21.8005 14.7291 21.9034 14.9896C22.1376 15.5832 21.9371 16.2416 21.4271 16.5538C21.2032 16.6909 20.7995 16.7336 19.9921 16.8189C19.5362 16.8672 19.3083 16.8913 19.1173 16.9645C18.6898 17.1284 18.3574 17.4726 18.1991 17.9151C18.1285 18.1128 18.1052 18.3489 18.0586 18.8209C17.9761 19.6569 17.9349 20.0749 17.8026 20.3067C17.501 20.8348 16.8651 21.0424 16.2918 20.7998C16.0402 20.6933 15.7432 20.3858 15.1491 19.7705L11.0003 15.475Z"
                      fill="#1C274C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 15.4004C15.2527 15.4004 18.7002 11.9529 18.7002 7.70021C18.7002 3.44751 15.2527 0 11 0C6.74731 0 3.2998 3.44751 3.2998 7.70021C3.2998 11.9529 6.74731 15.4004 11 15.4004ZM11 4.40012C10.6875 4.40012 10.4785 4.77506 10.0605 5.52491L9.95235 5.71892C9.83366 5.932 9.77425 6.03855 9.68163 6.10884C9.58901 6.17915 9.47373 6.20524 9.24305 6.25742L9.03305 6.30495C8.2213 6.48861 7.81544 6.58044 7.71888 6.89094C7.62232 7.20145 7.899 7.525 8.45238 8.1721L8.59555 8.33952C8.7528 8.5234 8.83142 8.61534 8.86684 8.72908C8.90215 8.84282 8.89027 8.96547 8.86651 9.21089L8.84484 9.43419C8.76119 10.2976 8.71937 10.7293 8.97211 10.9212C9.22501 11.1131 9.60496 10.9382 10.365 10.5882L10.5615 10.4977C10.7776 10.3983 10.8855 10.3485 11 10.3485C11.1145 10.3485 11.2224 10.3983 11.4385 10.4977L11.6351 10.5882C12.3951 10.9382 12.775 11.1131 13.0279 10.9212C13.2807 10.7293 13.2388 10.2976 13.1552 9.43419L13.1335 9.21089C13.1098 8.96547 13.0979 8.84282 13.1332 8.72908C13.1686 8.61534 13.2473 8.5234 13.4045 8.33953L13.5477 8.1721C14.101 7.525 14.3778 7.20145 14.2812 6.89094C14.1846 6.58044 13.7787 6.48861 12.967 6.30495L12.757 6.25742C12.5263 6.20524 12.411 6.17915 12.3184 6.10884C12.2258 6.03855 12.1664 5.932 12.0477 5.71892L11.9396 5.52491C11.5215 4.77506 11.3125 4.40012 11 4.40012Z"
                      fill="#1C274C"
                    />
                  </svg>
                </div>
                <Text as="p" size="2" weight="medium" mt="1">
                  순위확인
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/record" className={pathname.startsWith('/record') ? `${styles.active}` : ''}>
                <div className={styles.svg}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.42821 0C5.88506 0 6.25541 0.356167 6.25541 0.795517V2.40023C6.98915 2.38654 7.81161 2.38654 8.737 2.38654H13.1487C14.0741 2.38654 14.8966 2.38654 15.6303 2.40023V0.795517C15.6303 0.356167 16.0006 0 16.4575 0C16.9143 0 17.2847 0.356167 17.2847 0.795517V2.47061C18.8722 2.59286 19.9144 2.89289 20.68 3.62922C21.4457 4.36554 21.7577 5.36778 21.8848 6.89446L21.9723 7.68997H1.01667H0.000976562V6.89446C0.128092 5.36778 0.440074 4.36554 1.20572 3.62922C1.97138 2.89289 3.01354 2.59286 4.60101 2.47061V0.795517C4.60101 0.356167 4.97136 0 5.42821 0Z"
                      fill="#1C274C"
                    />
                    <path
                      opacity="0.5"
                      d="M21.9717 13.1829V10.9858C21.9717 10.064 21.9682 8.42082 21.954 7.68997H0.0109964C-0.00318608 8.42082 0.000406126 10.064 0.000406126 10.9858V13.1829C0.000406126 17.3258 0.000406105 19.3973 1.28746 20.6844C2.5745 21.9715 4.64599 21.9715 8.78895 21.9715H13.1832C17.3262 21.9715 19.3977 21.9715 20.6848 20.6844C21.9717 19.3973 21.9717 17.3258 21.9717 13.1829Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M17.578 16.4785C17.578 17.0853 17.0862 17.5771 16.4794 17.5771C15.8727 17.5771 15.3809 17.0853 15.3809 16.4785C15.3809 15.8718 15.8727 15.3799 16.4794 15.3799C17.0862 15.3799 17.578 15.8718 17.578 16.4785Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M17.578 12.0843C17.578 12.691 17.0862 13.1828 16.4794 13.1828C15.8727 13.1828 15.3809 12.691 15.3809 12.0843C15.3809 11.4775 15.8727 10.9857 16.4794 10.9857C17.0862 10.9857 17.578 11.4775 17.578 12.0843Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M12.0848 16.4785C12.0848 17.0853 11.593 17.5771 10.9863 17.5771C10.3795 17.5771 9.8877 17.0853 9.8877 16.4785C9.8877 15.8718 10.3795 15.3799 10.9863 15.3799C11.593 15.3799 12.0848 15.8718 12.0848 16.4785Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M12.0848 12.0843C12.0848 12.691 11.593 13.1828 10.9863 13.1828C10.3795 13.1828 9.8877 12.691 9.8877 12.0843C9.8877 11.4775 10.3795 10.9857 10.9863 10.9857C11.593 10.9857 12.0848 11.4775 12.0848 12.0843Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M6.59264 16.4785C6.59264 17.0853 6.10079 17.5771 5.49408 17.5771C4.88736 17.5771 4.39551 17.0853 4.39551 16.4785C4.39551 15.8718 4.88736 15.3799 5.49408 15.3799C6.10079 15.3799 6.59264 15.8718 6.59264 16.4785Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M6.59264 12.0843C6.59264 12.691 6.10079 13.1828 5.49408 13.1828C4.88736 13.1828 4.39551 12.691 4.39551 12.0843C4.39551 11.4775 4.88736 10.9857 5.49408 10.9857C6.10079 10.9857 6.59264 11.4775 6.59264 12.0843Z"
                      fill="#1C274C"
                    />
                  </svg>
                </div>
                <Text as="p" size="2" weight="medium" mt="1">
                  기록확인
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/mypage" className={pathname.startsWith('/mypage') ? `${styles.active}` : ''}>
                <div className={styles.svg}>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      opacity="0.5"
                      d="M10.5 21C5.55025 21 3.07538 21 1.53769 19.4623C-1.2517e-07 17.9247 0 15.4497 0 10.5C0 5.55025 -1.2517e-07 3.07538 1.53769 1.53769C3.07538 -1.2517e-07 5.55025 0 10.5 0C15.4497 0 17.9247 -1.2517e-07 19.4623 1.53769C21 3.07538 21 5.55025 21 10.5C21 15.4497 21 17.9247 19.4623 19.4623C17.9247 21 15.4497 21 10.5 21Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M13.6502 7.35001C13.6502 8.18544 13.3183 8.98666 12.7276 9.5774C12.1368 10.1681 11.3356 10.5 10.5002 10.5C9.66476 10.5 8.86355 10.1681 8.27281 9.5774C7.68207 8.98666 7.3502 8.18544 7.3502 7.35001C7.3502 6.51458 7.68207 5.71337 8.27281 5.12263C8.86355 4.53189 9.66476 4.20001 10.5002 4.20001C11.3356 4.20001 12.1368 4.53189 12.7276 5.12263C13.3183 5.71337 13.6502 6.51458 13.6502 7.35001ZM4.2002 15.75C4.2002 16.8 5.2502 16.8 5.2502 16.8H15.7502C15.7502 16.8 16.8002 16.8 16.8002 15.75C16.8002 14.7 15.7502 11.55 10.5002 11.55C5.2502 11.55 4.2002 14.7 4.2002 15.75Z"
                      fill="#1C274C"
                    />
                  </svg>
                </div>
                <Text as="p" size="2" weight="medium" mt="1">
                  마이페이지
                </Text>
              </Link>
            </li>
          </ul>
        </Flex>
      </footer>
    </Box>
  );
}