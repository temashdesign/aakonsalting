import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation, Trans } from 'next-i18next'
import type { FC } from 'react'

import { AnimatedTitle } from './AnimatedTitleH2'
import Link from 'next/link'

export const Footer: FC = () => {
  const { t } = useTranslation('common')

  // Form data
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Form status
  const [status, setStatus] = useState('unsubmitted')

  // Input changes
  const handleChange = (e) => {
    const field = e.target.name.toLowerCase()
    setData({
      ...data,
      [field]: e.target.value,
    })
  }

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('submitting')

    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    // Getform.io API

    fetch('https://getform.io/f/e526c327-9a4e-4a77-aa76-5a828a087e6d', {
      method: 'POST',
      body: formData,
    })

    setTimeout(() => {
      setStatus('submitted')
    }, 2000)
  }

  const sendString = t('footer.form.send')
  const sendingString = t('footer.form.sending')
  const alreadyString = t('footer.form.already')

  return (
    <footer className="bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center pt-20 text-ak-darkblue">
        <svg
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 md:h-24 md:w-24"
        >
          <g clipPath="url(#clip0_68_52)">
            <path
              d="M67.4013 0.000126563C68.6664 1.16501 69.9316 2.30511 71.1967 3.46999C72.0823 4.31268 72.9426 5.18014 73.8029 6.02282C75.0174 7.23728 75.0174 8.20388 73.8029 9.44312C73.6258 9.61662 73.474 9.79011 73.3221 9.93882C73.98 10.608 74.5873 11.2276 75.4476 12.1199C75.65 11.7977 75.8018 11.4259 76.0802 11.1781C77.067 10.261 78.1297 10.261 79.0912 11.1781C80.1539 12.1942 81.166 13.2352 82.33 14.4001C82.7348 13.9292 83.0637 13.5078 83.4433 13.1361C85.3916 11.2772 88.3014 11.2772 90.1738 13.0865C92.0462 14.9206 92.0715 17.7708 90.1738 19.6544C86.682 23.1243 83.1396 26.5694 79.5973 30.0393C76.8392 32.7408 74.0559 35.4671 71.2979 38.1687C71.0196 38.4413 70.6653 38.8379 70.3364 38.8379C69.8304 38.8379 69.0966 38.7139 68.8689 38.3669C68.6158 37.9952 68.717 37.3012 68.8182 36.7559C68.8688 36.4833 69.2484 36.2602 69.5014 36.0124C75.5235 30.1136 81.5456 24.2148 87.5676 18.2913C87.7448 18.1178 87.9219 17.9443 88.099 17.7708C88.934 16.8786 88.934 15.788 88.1496 15.0445C87.3652 14.3009 86.2519 14.3257 85.3663 15.1932C83.0637 17.4238 80.7612 19.704 78.4586 21.9346C78.2562 22.1329 78.0538 22.3312 77.8514 22.5295C77.1429 23.1491 76.3332 23.1739 75.7512 22.5543C75.1946 21.9842 75.2199 21.2159 75.8524 20.5715C77.067 19.357 78.3068 18.1674 79.5213 16.9529C79.7491 16.7298 79.9515 16.5068 80.1286 16.3333C79.243 15.4658 78.3827 14.6231 77.4718 13.7309C77.2188 13.9539 76.9151 14.2514 76.5862 14.5488C75.7259 15.2675 74.6632 15.3171 73.8535 14.5488C72.7402 13.5078 71.6269 12.4421 70.5641 11.3268C69.7797 10.5337 69.805 9.49269 70.5641 8.65001C70.8425 8.32781 71.1714 8.03039 71.4244 7.75776C69.8557 6.2211 68.3375 4.73402 66.8952 3.34607C65.8072 4.4366 64.6433 5.5767 63.1757 7.039C63.3528 7.13814 63.8336 7.31163 64.1625 7.63383C65.1746 8.62523 65.1746 9.6414 64.2131 10.6328C63.2516 11.5994 62.2648 12.566 61.278 13.5078C60.2659 14.4744 59.2285 14.4992 58.1911 13.5326C57.8621 13.2352 57.6091 12.8882 57.2042 12.3925C56.4958 13.1361 55.9138 13.7557 55.3065 14.3753C54.6993 14.9701 54.092 15.5402 53.5606 16.0359C55.1547 17.5973 56.6729 19.1092 58.267 20.6954C58.4188 20.5467 58.7224 20.2741 59.0007 20.0014C59.9116 19.1835 60.9997 19.134 61.8853 19.9519C62.9986 20.968 64.0613 22.009 65.0987 23.0995C65.9337 23.967 65.9084 24.9584 65.0987 25.8506C64.8204 26.1481 64.4662 26.3711 64.1119 26.619C65.124 27.5608 66.0096 28.3787 66.9711 29.2709C68.0592 28.2052 69.2484 27.0403 70.4123 25.9002C70.6653 25.6524 70.8931 25.4045 71.1714 25.1814C71.804 24.661 72.6137 24.6858 73.1197 25.2558C73.6511 25.8506 73.6511 26.495 73.1703 27.1147C72.9679 27.3625 72.7402 27.5608 72.5125 27.7838C67.0217 33.1621 61.531 38.5404 56.0403 43.9187C55.7873 44.1666 55.4837 44.3401 55.2559 44.5136C56.268 45.4554 57.1283 46.2981 58.267 47.3638C58.3176 47.2399 58.4441 46.8929 58.6718 46.6451C60.4683 44.8606 62.2648 43.1008 64.0866 41.3411C64.8204 40.6224 65.6554 40.5976 66.2627 41.1924C66.8699 41.7872 66.8193 42.5804 66.0855 43.3239C64.1878 45.1828 62.3154 47.0416 60.3924 48.9005C59.9876 49.297 59.7851 49.6192 59.9622 50.2636C60.5442 52.5934 59.1526 54.7745 56.7488 55.3197C56.2933 55.4189 56.0909 55.5924 55.9897 56.0633C55.5849 57.7734 54.4715 58.8887 52.7003 59.2853C52.2449 59.3844 52.0425 59.5827 51.9413 60.0288C51.3593 62.433 49.1326 63.7218 46.6783 63.2013C46.324 63.1269 45.9192 63.35 45.5396 63.4739C45.4384 63.4987 45.3625 63.6474 45.2613 63.7218C43.566 64.9114 43.1359 66.2994 43.6166 68.4061C44.2998 71.3803 43.2371 74.2057 41.3394 76.709C42.6298 78.3943 43.4648 80.2532 43.6672 82.3599C44.0468 86.2759 42.8069 89.5971 39.7959 92.249C38.9862 92.9678 38.1259 92.9678 37.5439 92.3234C36.9367 91.6542 37.0632 90.9107 37.8982 90.1423C41.643 86.7716 41.9466 81.6659 38.6573 77.9482C37.7464 76.932 37.7717 76.4611 38.7838 75.321C43.06 70.4632 40.6815 63.003 34.3305 61.4911C31.446 60.7972 28.8398 61.4664 26.5625 63.35C25.348 64.3662 24.9684 64.3662 23.7286 63.35C21.2236 61.2929 18.3897 60.7228 15.2269 61.6646C14.6955 61.8133 14.0123 61.8381 13.5569 61.6151C13.2279 61.4664 12.899 60.7724 12.9749 60.4006C13.0761 59.9545 13.5316 59.3844 13.9617 59.2109C16.5426 58.1948 19.1994 58.1452 21.8056 59.1118C22.9695 59.5331 24.0575 60.1775 25.2468 60.7724C26.8915 59.5827 28.7892 58.6409 30.9652 58.5913C32.5846 58.5417 34.204 58.8887 35.8234 58.9879C36.1776 59.0127 36.5571 58.9135 36.8608 58.74C37.1897 58.5665 37.3921 58.2195 37.6705 57.9717C38.5561 57.129 39.3404 56.4846 38.9103 54.8984C38.3789 52.8908 40.0236 50.908 42.1238 50.4619C42.6551 50.3628 42.8322 50.1397 42.9588 49.644C43.3889 47.9834 44.4263 46.8681 46.1722 46.4963C46.6024 46.3972 46.8301 46.2485 46.9566 45.7528C47.5133 43.3239 49.8411 41.936 52.2955 42.6299C52.8775 42.8034 53.2317 42.7043 53.6871 42.2829C57.1789 38.8379 60.696 35.4176 64.1878 31.9725C64.3902 31.7742 64.5674 31.5759 64.8457 31.2785C63.8842 30.3862 62.948 29.5188 62.0371 28.6265C60.5695 27.189 60.5695 26.3711 61.9865 24.9584C62.113 24.8345 62.2395 24.6858 62.4166 24.5123C61.7334 23.9174 61.0503 23.3226 60.3165 22.6782C60.1394 22.8517 59.8357 23.1491 59.5068 23.4465C58.6718 24.1653 57.5585 24.2148 56.7741 23.4465C54.7499 21.5381 52.7762 19.5801 50.8026 17.6221C49.9676 16.7794 49.9929 15.7385 50.8279 14.871C52.422 13.26 54.0667 11.649 55.7114 10.0875C56.6223 9.22006 57.6597 9.22006 58.5959 10.0627C58.9754 10.3849 59.2538 10.8311 59.5827 11.2028C60.3671 10.4345 60.9997 9.79011 61.8347 8.94743C61.4551 8.67479 60.9997 8.40216 60.6201 8.03039C59.861 7.26206 59.7598 6.24589 60.4683 5.50235C62.1636 3.74263 63.9348 2.08205 65.6807 0.371898C65.8578 0.198405 66.0855 0.0992656 66.3133 -0.0246582C66.6422 0.000126563 67.0217 0.000126563 67.4013 0.000126563ZM57.3814 51.3046C57.103 50.8337 56.9765 50.4371 56.6982 50.1645C55.2306 48.6774 53.7378 47.2151 52.2196 45.7776C51.5364 45.1332 50.6761 45.0836 50.1195 45.6785C49.5628 46.2485 49.4869 46.9673 50.0182 47.5125C51.6123 49.1483 53.2317 50.7345 54.9017 52.2712C55.2306 52.5686 55.9897 52.5686 56.4705 52.4199C56.8753 52.2712 57.0777 51.7011 57.3814 51.3046ZM43.0094 52.9652C42.5792 53.3369 42.0985 53.5848 41.8201 53.9813C41.4153 54.5762 41.7189 55.171 42.1997 55.6419C43.6672 57.0794 45.1348 58.5417 46.6277 59.9545C47.3361 60.6484 48.2217 60.6732 48.8037 60.0784C49.411 59.4588 49.3604 58.6905 48.6013 57.9469C47.1843 56.5342 45.7674 55.1462 44.3251 53.7583C43.9709 53.4857 43.5407 53.2874 43.0094 52.9652ZM51.8907 56.782C52.3208 56.3855 52.9534 56.1128 53.0546 55.6915C53.1811 55.2206 53.004 54.5018 52.675 54.1301C51.2581 52.6182 49.7399 51.1807 48.2217 49.7432C47.5133 49.0492 46.7289 49.0244 46.1469 49.5697C45.5649 50.1397 45.5902 51.0567 46.2481 51.7259C47.7157 53.1882 49.2085 54.6505 50.7267 56.0881C50.9797 56.3607 51.3846 56.4846 51.8907 56.782ZM41.8201 62.9534C42.3515 62.4577 43.0347 61.8381 43.6925 61.2185C42.8322 60.351 41.9719 59.5084 41.1116 58.6657C40.4538 59.3349 39.7959 59.9793 39.2392 60.5245C40.0995 61.2929 40.9598 62.1355 41.8201 62.9534Z"
              fill="#F7B66A"
            />
            <path
              d="M32.0532 88.3331C30.1808 88.3579 28.7891 87.2674 27.777 85.6564C27.3722 84.9872 26.942 84.7146 26.1323 84.9128C25.4998 85.0615 24.766 85.0863 24.1587 84.9128C23.2225 84.6402 22.8177 85.0615 22.3622 85.7555C21.0971 87.7135 19.3259 88.7049 16.9221 88.234C15.1509 87.887 13.9364 86.7965 13.4303 85.0863C12.9243 83.3266 13.2785 81.6908 14.6196 80.402C15.2774 79.7824 16.3402 79.4354 16.6944 78.7166C17.0233 77.9979 16.4667 76.9074 16.6944 76.0895C17.0739 74.7511 16.2389 74.3297 15.4039 73.7101C12.8737 71.876 12.4435 68.8027 14.3412 66.6713C16.2895 64.4902 19.7813 64.4654 21.6031 66.82C22.6153 68.1088 23.5515 68.5797 25.2467 68.5549C26.7143 68.5301 27.524 68.2079 28.3084 67.043C29.4217 65.4072 31.1423 64.7876 33.1159 65.1594C34.9377 65.4816 36.1523 66.5969 36.7342 68.307C37.4174 70.3146 36.7342 72.347 34.71 73.7101C33.6979 74.4041 33.4955 75.0981 33.4196 76.2877C33.293 78.1218 33.8244 79.2123 35.3426 80.2533C37.0126 81.4182 37.3921 83.624 36.633 85.4581C35.9498 87.2674 34.2545 88.3579 32.0532 88.3331ZM25.0696 71.2316C21.9827 71.2564 19.503 73.7101 19.503 76.7339C19.503 79.8072 22.0333 82.2609 25.1708 82.2361C28.2831 82.2113 30.7375 79.7824 30.7375 76.7339C30.7375 73.6358 28.2072 71.2069 25.0696 71.2316ZM17.833 71.9504C18.6427 71.1573 19.4271 70.4137 20.2368 69.6206C19.5283 68.307 18.7439 67.737 17.6559 67.9105C16.7703 68.0592 16.2642 68.5797 16.1124 69.4224C15.91 70.4633 16.5173 71.2812 17.833 71.9504ZM17.833 81.4925C16.9727 82.0378 15.8594 82.6079 16.1124 84.0702C16.2642 84.9128 16.8209 85.4085 17.7065 85.5325C18.8198 85.6812 19.6548 85.0863 20.2115 83.9214C19.3765 83.0788 18.6427 82.3352 17.833 81.4925ZM30.029 69.4967C30.8893 70.3642 31.6737 71.1325 32.4834 71.9256C33.2677 71.3804 34.4064 70.8351 34.1533 69.3728C34.0015 68.5549 33.4702 68.0592 32.6605 67.9105C31.1423 67.6626 30.535 68.7284 30.029 69.4967ZM30.0037 83.8223C30.6869 85.1855 31.5218 85.7555 32.6605 85.5325C33.4702 85.3838 34.0774 84.7146 34.1533 83.8471C34.2292 82.7813 33.4955 81.8891 32.4327 81.5173C31.5725 82.36 30.8134 83.0788 30.0037 83.8223Z"
              fill="#F7B66A"
            />
            <path
              d="M25.1201 92.5713C21.603 95.025 17.8582 95.6942 13.8603 94.2071C6.92737 91.6542 4.29588 83.3761 8.47084 77.403C8.82508 76.8825 8.82508 76.5851 8.47084 76.0398C5.94056 72.1982 5.78874 68.2326 7.93948 64.1927C8.29372 63.5483 8.85039 63.127 9.55887 63.4244C10.0143 63.6227 10.3939 64.1679 10.6469 64.6388C10.7734 64.8619 10.5457 65.2833 10.3939 65.5807C8.54675 69.224 9.0022 72.57 11.7349 75.6185C12.494 76.4612 12.4434 77.0064 11.5325 78.0226C7.2057 82.8556 9.50826 90.3159 15.834 91.9021C18.7185 92.6208 21.3247 91.9764 23.6272 90.1176C24.943 89.0271 25.2719 89.0271 26.5877 90.1176C28.1564 91.4312 29.9782 92.1004 32.0278 92.1747C33.217 92.2243 33.9002 92.7696 33.8243 93.6122C33.7737 94.4549 33.0399 95.0002 31.9013 94.9506C29.4216 94.901 27.1696 94.0831 25.1201 92.5713Z"
              fill="#F7B66A"
            />
            <path
              d="M65.5541 13.6565C66.0602 13.9539 66.465 14.1026 66.7433 14.3505C68.0591 15.5897 69.3495 16.8537 70.64 18.1425C71.3738 18.8613 71.3991 19.6792 70.7918 20.274C70.1845 20.8441 69.3495 20.7945 68.6158 20.0757C67.3253 18.8117 65.9843 17.5725 64.7697 16.2589C64.4408 15.9119 64.289 15.1684 64.4155 14.6975C64.4914 14.3009 65.124 14.0283 65.5541 13.6565Z"
              fill="#F7B66A"
            />
            <path
              d="M43.6151 36.2105C43.2356 36.7558 42.8813 37.3506 42.4259 37.8711C42.1728 38.1437 41.7427 38.3172 41.3885 38.4907C39.1365 39.5813 37.4412 41.2171 36.3279 43.4229C35.8218 44.4143 35.3158 45.4552 33.8988 45.48C32.4566 45.5048 31.9252 44.4391 31.3938 43.3981C30.2805 41.2171 28.6358 39.606 26.4092 38.5155C25.3971 38.0198 24.3344 37.4993 24.309 36.1362C24.2837 34.773 25.3212 34.2525 26.3586 33.7321C28.6358 32.6167 30.3564 30.9562 31.4697 28.7007C31.6469 28.329 31.8493 27.982 32.077 27.6598C32.9879 26.3958 34.7591 26.3958 35.67 27.6846C35.7712 27.8333 35.8724 28.0068 35.9483 28.1555C37.2135 30.857 39.2377 32.7902 41.9704 34.0543C42.856 34.4508 43.4127 35.0952 43.6151 36.2105ZM33.8735 30.1878C32.4566 32.8894 30.5082 34.7482 27.8261 36.1114C30.5588 37.4498 32.4566 39.383 33.8988 42.0102C35.2652 39.3086 37.2641 37.4498 39.9209 36.0618C37.1882 34.773 35.2905 32.8398 33.8735 30.1878Z"
              fill="#F7B66A"
            />
            <path
              d="M94.5002 72.7928C94.2725 73.0902 93.9435 73.7098 93.4628 74.1559C93.0326 74.5525 92.4507 74.7756 91.9193 75.0482C90.0722 75.99 88.6806 77.378 87.6937 79.1625C87.4154 79.6829 87.1371 80.2034 86.8081 80.6991C85.8972 82.0127 84.0754 82.0127 83.1645 80.6743C83.0633 80.5256 82.9621 80.3521 82.8862 80.2034C81.6464 77.5762 79.6727 75.6678 77.0159 74.4286C76.5605 74.2055 76.1051 73.8337 75.8267 73.4124C75.1942 72.4706 75.5231 71.2313 76.5352 70.5869C77.0666 70.2399 77.6232 69.9673 78.1799 69.6699C79.9258 68.7281 81.3174 67.3897 82.2536 65.6548C82.4814 65.2582 82.7344 64.8617 82.9368 64.4403C83.367 63.6224 84.0248 63.0771 85.0116 63.0771C85.9985 63.0771 86.6816 63.6224 87.0612 64.4651C88.3263 67.1666 90.3252 69.0998 93.0832 70.3391C93.9435 70.7604 94.4749 71.4296 94.5002 72.7928ZM85.0116 78.2454C86.4033 75.5935 88.3263 73.7346 90.9831 72.3714C88.2757 71.0578 86.4033 69.1246 84.9863 66.5718C83.5947 69.199 81.6717 71.0578 79.0655 72.3714C81.697 73.7346 83.62 75.5935 85.0116 78.2454Z"
              fill="#F7B66A"
            />
            <path
              d="M57.9367 88.209C57.4053 87.7877 56.6462 87.4903 56.3679 86.945C55.204 84.6648 53.5087 83.029 51.1808 81.8889C49.6374 81.1206 49.6374 79.1626 51.2061 78.3942C53.5087 77.2541 55.1534 75.6431 56.3173 73.3877C57.127 71.8263 59.1259 71.8263 59.9356 73.4125C61.0742 75.6184 62.7189 77.2294 64.9709 78.3447C66.6409 79.1626 66.6156 81.1206 64.9456 81.9385C62.6683 83.0538 60.9983 84.64 59.9356 86.8954C59.5814 87.639 58.9488 88.0107 57.9367 88.209ZM58.1138 83.9708C59.4042 82.7316 60.7959 81.3684 62.0357 80.154C60.7453 78.8652 59.3536 77.5268 58.1138 76.3123C56.8234 77.5763 55.457 78.9147 54.1919 80.154C55.4823 81.3932 56.8487 82.7316 58.1138 83.9708Z"
              fill="#F7B66A"
            />
            <path
              d="M35.0134 15.887C34.3555 15.3666 33.6217 15.0939 33.3434 14.5734C32.4325 12.8633 31.142 11.6241 29.3961 10.7318C27.9539 9.98827 27.9539 8.20376 29.3961 7.46022C31.1167 6.56797 32.3819 5.3783 33.2675 3.69294C34.0519 2.23064 35.8737 2.20585 36.6581 3.66815C37.569 5.35352 38.8088 6.56797 40.5294 7.46022C42.0223 8.22855 42.0223 10.0131 40.5294 10.7814C38.8088 11.6736 37.569 12.8881 36.6581 14.5734C36.405 15.0691 35.6966 15.3666 35.0134 15.887ZM32.7867 9.04645C33.4699 9.74042 34.3555 10.6079 35.0134 11.2771C35.6966 10.6079 36.5822 9.74042 37.24 9.09602C36.5568 8.42683 35.6966 7.55936 35.064 6.93974C34.3555 7.58415 33.4446 8.42683 32.7867 9.04645Z"
              fill="#F7B66A"
            />
            <path
              d="M7.205 32.0219C6.54712 31.551 5.81334 31.3032 5.56031 30.8075C4.62411 29.0478 3.30836 27.759 1.48656 26.8171C0.0949017 26.0984 0.145507 24.3139 1.53716 23.5951C3.28306 22.7029 4.5482 21.4636 5.4591 19.7535C6.26879 18.3408 8.09059 18.3408 8.84968 19.7783C9.76058 21.4636 10.9751 22.6781 12.6957 23.5703C14.1886 24.3387 14.2139 26.1232 12.721 26.8915C11.0004 27.7838 9.73528 28.9982 8.84968 30.6588C8.57135 31.1793 7.86287 31.5015 7.205 32.0219ZM7.12909 27.3624C7.83757 26.6684 8.69786 25.801 9.27983 25.2061C8.64726 24.5865 7.76166 23.7191 7.17969 23.1242C6.49652 23.7686 5.61092 24.6361 4.97835 25.2557C5.63622 25.9001 6.49652 26.7428 7.12909 27.3624Z"
              fill="#F7B66A"
            />
            <path
              d="M87.0858 38.0693C87.769 38.6146 88.4775 38.9368 88.7558 39.4573C89.6414 41.1426 90.9065 42.3571 92.6271 43.2494C94.12 44.0177 94.12 45.8022 92.6271 46.5705C90.9065 47.4628 89.6667 48.6772 88.7811 50.3626C87.9967 51.8249 86.1749 51.8001 85.3905 50.313C84.5049 48.6524 83.2904 47.4628 81.5951 46.5953C80.0516 45.8022 80.0516 44.0425 81.5951 43.2246C83.2904 42.3571 84.5049 41.1426 85.3905 39.5068C85.6942 38.9368 86.4279 38.6146 87.0858 38.0693ZM87.0858 47.0414C87.769 46.397 88.6546 45.5543 89.2619 44.9595C88.5787 44.2655 87.7437 43.3733 87.1364 42.7537C86.4279 43.3981 85.517 44.2407 84.8086 44.8851C85.5423 45.5543 86.4026 46.3722 87.0858 47.0414Z"
              fill="#F7B66A"
            />
          </g>
          <defs>
            <clipPath id="clip0_68_52">
              <rect
                width="94"
                height="95"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="my-10 max-w-3xl px-10 text-center text-xl lg:text-2xl">
          {t('footer.paragraph')}
        </p>

        <AnimatedTitle
          className=" mx-auto max-w-3xl px-6 text-center font-serif text-3xl font-black text-ak-darkblue lg:text-[44px] lg:leading-[52px]"
          text={[t('footer.title')]}
        />

        <div className="my-10 w-full overflow-hidden">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative  w-full  overflow-hidden bg-[#FBF9F8] py-20 px-6 sm:px-28 lg:rounded-lg">
              <div className="bg-primary absolute left-1/2 top-0 h-[50px] w-[2px]"></div>
              <div className="relative z-10 mx-auto max-w-lg lg:max-w-none">
                <form
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
                >
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {t('footer.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="focus:border-primary focus:ring-primary block w-full rounded-md border-2 border-ak-blue py-5 px-7 placeholder-ak-darkblue shadow-sm  disabled:text-neutral-500/60 disabled:shadow-none"
                      placeholder={t('footer.form.name')}
                      value={data.name}
                      onChange={handleChange}
                      disabled={status === 'submitted'}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      {t('footer.form.email')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="focus:border-primary focus:ring-primary block w-full rounded-md border-2 border-ak-blue py-5 px-7 placeholder-ak-darkblue shadow-sm  disabled:text-neutral-500/60 disabled:shadow-none"
                      placeholder={t('footer.form.email')}
                      value={data.email}
                      onChange={handleChange}
                      disabled={status === 'submitted'}
                      pattern="[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="sr-only">
                      {t('footer.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="focus:border-primary focus:ring-primary block w-full rounded-md border-2 border-ak-blue py-5 px-7 placeholder-ak-darkblue shadow-sm  disabled:text-neutral-500/60 disabled:shadow-none"
                      placeholder={t('footer.form.message')}
                      // defaultValue={''}
                      required
                      disabled={status === 'submitted'}
                      value={data.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex w-full justify-center sm:col-span-2">
                    <input
                      type="submit"
                      disabled={status === 'submitted'}
                      value={
                        status === 'unsubmitted'
                          ? sendString
                          : status === 'submitting'
                          ? sendingString
                          : alreadyString
                      }
                      className="focus:ring-primary inline-flex cursor-pointer justify-center rounded-full border border-transparent bg-ak-gold py-5 px-12 text-lg font-bold text-white shadow-sm transition duration-200 hover:bg-ak-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-white/60"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-16 mb-5 w-full max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-5 px-6 text-center ">
              <AnimatedTitle
                className=" mx-auto max-w-3xl px-6 text-center font-serif text-3xl  text-ak-darkblue lg:text-[44px] lg:leading-[52px]"
                text={[t('footer.bottomtitle')]}
              />
              <ul className="mt-5 flex h-full w-full flex-col items-center justify-between gap-4 lg:flex-row ">
                <li className="flex h-full items-center justify-center gap-4">
                  <svg
                    width="35"
                    height="24"
                    viewBox="0 0 35 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                  >
                    <path
                      d="M0 2.6C0.1 2.4 0.1 2.2 0.2 2.1C0.6 0.8 1.7 0 3 0C5.1 0 7.2 0 9.3 0C16.5 0 23.7 0 31 0C32.5 0 33.7 0.9 34.1 2.2C34.2 2.5 34.2 2.8 34.2 3.1C34.2 9 34.2 14.9 34.2 20.9C34.2 22.7 32.9 24 31.1 24C21.8 24 12.6 24 3.3 24C1.6 24 0.5 23.1 0.1 21.5V21.4C0 15.1 0 8.9 0 2.6ZM3.5 2C3.6 2.1 3.7 2.2 3.7 2.2C7.8 6.4 12 10.5 16.1 14.7C16.7 15.3 17.3 15.3 17.9 14.7C22 10.5 26.2 6.4 30.3 2.2C30.4 2.1 30.4 2.1 30.5 2C21.6 2 12.6 2 3.5 2ZM3.5 22C12.6 22 21.6 22 30.7 22C27.8 19.1 25 16.3 22.1 13.5C22 13.6 21.9 13.6 21.9 13.7C21.1 14.5 20.2 15.4 19.4 16.2C18.1 17.5 16.1 17.5 14.8 16.2C14.3 15.7 13.8 15.2 13.3 14.7C12.9 14.3 12.5 13.9 12.1 13.5C9.2 16.3 6.4 19.1 3.5 22ZM2 3.5C2 9.1 2 14.8 2 20.5C4.8 17.7 7.7 14.9 10.6 12C7.7 9.2 4.9 6.3 2 3.5ZM32.1 20.5C32.1 14.8 32.1 9.2 32.1 3.6C29.3 6.4 26.4 9.2 23.5 12.1C26.4 14.9 29.3 17.7 32.1 20.5Z"
                      fill="#2E62B0"
                    />
                  </svg>

                  <Link
                    href="mailto:aakonsalting@gmail.com"
                    className="text-xl font-bold text-ak-blue underline transition duration-200 hover:text-ak-darkblue hover:no-underline md:text-2xl"
                  >
                    aakonsalting@gmail.com
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-4 ">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="min-w-[25px]"
                  >
                    <g clipPath="url(#clip0_53_35)">
                      <path
                        d="M0.100098 6.05C0.200098 5.85 0.200098 5.65 0.300098 5.45C1.0001 4.25 1.8001 3.15 2.8001 2.15C3.4001 1.55 4.0001 0.950002 4.6001 0.450002C5.5001 -0.249998 6.3001 0.150002 6.8001 0.750002C7.9001 2.25 9.0001 3.85 9.8001 5.65C9.9001 5.95 10.0001 6.15 10.1001 6.45C10.2001 6.85 10.2001 7.35 9.9001 7.65C9.5001 7.95 9.2001 8.25 8.8001 8.55C8.6001 8.75 8.4001 8.95 8.2001 9.15C8.0001 9.25 8.0001 9.35 8.1001 9.45C8.9001 11.65 10.2001 13.35 12.1001 14.75C12.9001 15.35 13.8001 15.75 14.7001 16.05C14.9001 16.15 15.0001 16.05 15.1001 15.95C15.4001 15.65 15.7001 15.25 16.0001 14.95C16.2001 14.75 16.4001 14.55 16.6001 14.35C16.9001 14.05 17.3001 13.95 17.8001 14.15C18.7001 14.35 19.5001 14.85 20.3001 15.35C21.3001 15.95 22.3001 16.65 23.3001 17.35C23.7001 17.55 23.9001 17.95 24.1001 18.35C24.2001 18.65 24.2001 19.05 24.0001 19.35C23.8001 19.65 23.5001 20.05 23.3001 20.35C22.1001 21.75 20.6001 22.85 19.1001 23.85C18.4001 24.05 17.8001 24.05 17.1001 23.95C14.9001 23.55 12.9001 22.55 11.1001 21.35C7.3001 18.85 4.3001 15.75 2.1001 11.85C1.2001 10.35 0.600098 8.75 0.200098 7.05C0.200098 6.75 0.200098 6.45 0.100098 6.05ZM5.5001 1.75C5.4001 1.75 5.4001 1.85 5.4001 1.85C4.0001 3.05 2.8001 4.45 1.8001 6.05C1.8001 6.15 1.7001 6.25 1.8001 6.35C2.0001 7.75 2.5001 9.15 3.2001 10.35C5.5001 14.75 8.9001 18.15 13.2001 20.65C14.6001 21.45 16.2001 22.05 17.8001 22.35C17.9001 22.35 18.1001 22.35 18.2001 22.25C19.4001 21.55 20.4001 20.65 21.4001 19.65C21.8001 19.35 22.1001 18.95 22.5001 18.55C22.4001 18.45 22.3001 18.35 22.2001 18.35C20.8001 17.35 19.3001 16.45 17.7001 15.65C17.5001 15.55 17.4001 15.55 17.2001 15.75C16.7001 16.25 16.3001 16.75 15.8001 17.35C15.5001 17.75 15.1001 17.75 14.6001 17.65C12.8001 17.15 11.2001 16.25 9.9001 14.95C8.3001 13.55 7.1001 11.65 6.4001 9.45C6.3001 9.05 6.3001 8.65 6.7001 8.25C7.0001 8.05 7.2001 7.75 7.5001 7.55C7.7001 7.35 8.0001 7.15 8.2001 6.95C8.4001 6.75 8.4001 6.65 8.3001 6.45C7.7001 5.25 7.1001 4.15 6.4001 3.05C6.2001 2.55 5.8001 2.15 5.5001 1.75Z"
                        fill="#2E62B0"
                      />
                      <path
                        d="M23.3004 11.2501C22.8004 11.2501 22.3004 11.2501 21.7004 11.2501C21.7004 8.85006 20.8004 6.75006 19.1004 5.05006C17.4004 3.35006 15.3004 2.55006 12.9004 2.45006C12.9004 1.95006 12.9004 1.45006 12.9004 0.850059C18.2004 0.750059 23.3004 5.15006 23.3004 11.2501Z"
                        fill="#2E62B0"
                      />
                      <path
                        d="M12.9004 6.44989C12.9004 5.94989 12.9004 5.44989 12.9004 4.84989C15.8004 4.64989 19.3004 7.24989 19.3004 11.2499C19.0004 11.2499 18.8004 11.2499 18.5004 11.2499C18.2004 11.2499 18.0004 11.2499 17.7004 11.2499C17.7004 9.94989 17.2004 8.74989 16.3004 7.84989C15.4004 6.94989 14.2004 6.44989 12.9004 6.44989Z"
                        fill="#2E62B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_53_35">
                        <rect
                          width="24"
                          height="23.9"
                          fill="white"
                          transform="translate(0.100098 0.0500488)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <Link
                    href="tel:+38268384271"
                    className="text-xl font-bold text-ak-darkblue transition duration-200 hover:text-ak-darkblue md:text-2xl "
                  >
                    +382 68 384271
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-4">
                  <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                  >
                    <path
                      d="M22.2001 0C23.5001 0 24.7001 0 26.0001 0C26.0001 0.1 26.2001 0.1 26.2001 0.1C29.8001 0.4 33.2001 1.5 36.3001 3.4C44.5001 8.2 49.2001 17.9 47.9001 27.3C47.1001 33 44.6001 37.9 40.4001 41.7C34.9001 46.7 28.3001 48.8 20.9001 47.8C15.7001 47.1 11.1001 44.9 7.4001 41.2C3.6001 37.5 1.3001 32.9 0.400098 27.6C0.300098 27 0.300098 26.5 0.100098 26C0.100098 24.7 0.100098 23.4 0.100098 22.1C0.200098 22.1 0.200098 21.9 0.200098 21.9C0.300098 21.1 0.400098 20.3 0.600098 19.4C2.5001 9.6 10.7001 1.8 20.6001 0.3C21.1001 0.2 21.7001 0.2 22.2001 0ZM19.7001 34.5C19.7001 34.6 19.6001 34.9 19.7001 35C19.9001 35.1 20.1001 35 20.3001 34.9C20.5001 34.8 20.6001 34.7 20.8001 34.5C21.7001 33.7 22.5001 32.9 23.4001 32C23.7001 31.7 23.9001 31.7 24.2001 31.9C26.0001 33.2 27.7001 34.5 29.5001 35.8C30.8001 36.7 31.6001 36.4 32.0001 34.8C32.9001 30.6 33.8001 26.4 34.7001 22.2C35.1001 20.3 35.5001 18.4 35.9001 16.5C36.0001 15.9 36.1001 15.2 35.6001 14.7C35.0001 14.2 34.5001 14.5 33.9001 14.7C28.2001 16.9 22.5001 19.1 16.8001 21.3C14.9001 22.1 12.9001 22.8 11.0001 23.6C10.6001 23.8 10.0001 24 10.1001 24.6C10.1001 25.1 10.7001 25.3 11.1001 25.4C12.9001 26 14.7001 26.5 16.5001 27.1C16.9001 27.2 17.1001 27.2 17.4001 27C21.7001 24.3 26.1001 21.5 30.4001 18.8C30.7001 18.6 30.9001 18.4 31.2001 18.4C31.3001 18.4 31.5001 18.4 31.5001 18.5C31.5001 18.6 31.5001 18.7 31.4001 18.8C31.2001 19 30.9001 19.3 30.6001 19.5C27.2001 22.5 23.9001 25.6 20.5001 28.6C20.3001 28.8 20.2001 28.9 20.2001 29.2C20.0001 30.9 19.8001 32.7 19.7001 34.5Z"
                      fill="#039BE4"
                    />
                  </svg>

                  <Link
                    href="https://telegram.me/aakonsalting"
                    className="text-xl font-bold text-ak-blue underline transition duration-200 hover:text-ak-darkblue hover:no-underline md:text-2xl"
                  >
                    {t('footer.telegram')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-10 flex justify-center">
              <svg
                width="27"
                height="22"
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.77275 20.0736C9.87276 18.2736 10.0728 16.4736 10.1728 14.7736C10.1728 14.4736 10.3728 14.3736 10.4728 14.1736C13.8728 11.1736 17.1728 8.07363 20.5728 5.07363C20.8728 4.87363 21.0728 4.57363 21.3728 4.37363C21.4728 4.27363 21.5728 4.17363 21.4728 4.07363C21.3728 3.97363 21.2728 3.97363 21.1728 3.97363C20.8728 3.97363 20.5728 4.17363 20.3728 4.37363C16.0728 7.07363 11.6728 9.87363 7.37276 12.5736C7.07275 12.7736 6.77275 12.7736 6.47275 12.6736C4.67275 12.0736 2.87275 11.5736 1.07275 10.9736C0.672754 10.8736 0.0727539 10.6736 0.0727539 10.1736C0.0727539 9.57363 0.572755 9.37363 0.972754 9.17363C2.87275 8.37363 4.87275 7.67363 6.77275 6.87363C12.4728 4.67363 18.1728 2.47363 23.8728 0.273627C24.4728 0.0736274 25.0728 -0.226373 25.5728 0.273627C26.1728 0.773627 26.0728 1.47363 25.8728 2.07363C25.4728 3.97363 25.0728 5.87363 24.6728 7.77363C23.7728 11.9736 22.8728 16.1736 21.9728 20.3736C21.6728 21.9736 20.7728 22.2736 19.4728 21.3736C17.6728 20.0736 15.8728 18.7736 14.1728 17.4736C13.8728 17.1736 13.6728 17.2736 13.3728 17.5736C12.5728 18.3736 11.6728 19.2736 10.7728 20.0736C10.6728 20.1736 10.4728 20.3736 10.2728 20.4736C10.0728 20.5736 9.87275 20.6736 9.67275 20.5736C9.67275 20.3736 9.77275 20.1736 9.77275 20.0736Z"
                  fill="#2E62B0"
                />
              </svg>
            </div>
            <div className="mt-4 p-3 text-center text-base">
              © 2022 AA Konsalting
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
