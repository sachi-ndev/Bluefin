import React from 'react'
import chicken from './../../../assets/chicken.png'

export default function DealoftheDay() {
  return (
    <div className='h-full w-[100vw] mx-auto flex flex-col items-center justify-center bg-[#F2FAFF]  relative'>
    <div className='h-[8rem]  w-full items-center flex justify-between px-[5rem]'>

  <h1 className='text-[28px] font-medium'>Deal Of the day</h1>

</div>

<div className='flex w-[100vw] mx-auto  items-center justify-center h-[500px] gap-10  absolute top-[5rem] bg-[#F2FAFF]'>
<div className='   justify-evenly  w-[302px] mt-12 flex flex-col items-center ' >
   <div className='h-[202px]  w-[302px] rounded-2xl relative'>

    <img src={chicken} alt="" className='h-[202px]  w-[302px] rounded-2xl   ' />

        <div className='w-[46px] h-[46px] bg-white flex items-center justify-center rounded-full border-[1px] border-[#176BA4] absolute -bottom-[23px] right-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71649 2.97917C7.97316 2.43833 8.52591 2.0625 9.16666 2.0625H12.8333C13.4732 2.0625 14.0259 2.43833 14.2835 2.97917C14.9096 2.98467 15.3982 3.01308 15.8345 3.18358C16.3554 3.38733 16.8084 3.73359 17.1417 4.18275C17.4781 4.63467 17.6357 5.21583 17.853 6.01425L17.8869 6.13892L18.4277 8.12533C18.7887 8.30676 19.1049 8.56599 19.3536 8.88433C19.9237 9.61492 20.0246 10.4848 19.9237 11.4822C19.8247 12.4502 19.5204 13.6693 19.1391 15.1956L19.1143 15.2918C18.8732 16.2571 18.6771 17.0408 18.4452 17.6523C18.2013 18.2903 17.8933 18.8127 17.3846 19.2097C16.8767 19.6066 16.2947 19.778 15.6172 19.8605C14.9673 19.9375 14.1597 19.9375 13.1652 19.9375H8.83482C7.84024 19.9375 7.03174 19.9375 6.38274 19.8596C5.70441 19.7789 5.12324 19.6066 4.61449 19.2087C4.10666 18.8127 3.79866 18.2903 3.55482 17.6523C3.32199 17.0408 3.12674 16.2571 2.88566 15.2918L2.86091 15.1956C2.47957 13.6693 2.17432 12.4502 2.07624 11.4831C1.97541 10.4839 2.07624 9.61492 2.64549 8.88433C2.90491 8.5525 3.21566 8.30683 3.57132 8.12533L4.11216 6.13892L4.14699 6.01425C4.36424 5.21583 4.52191 4.63467 4.85832 4.18183C5.19174 3.73302 5.64473 3.38708 6.16549 3.18358C6.60182 3.01308 7.08949 2.98375 7.71649 2.97917ZM7.7174 4.356C7.11057 4.36242 6.86766 4.38533 6.66599 4.46417C6.38546 4.57387 6.14148 4.76035 5.96199 5.00225C5.80066 5.2195 5.70532 5.52292 5.43949 6.501L5.11499 7.68992C6.06649 7.5625 7.29482 7.5625 8.82015 7.5625H13.1789C14.7052 7.5625 15.9335 7.5625 16.8841 7.68992L16.5605 6.501C16.2937 5.52292 16.1993 5.2195 16.038 5.00225C15.8585 4.76035 15.6145 4.57387 15.334 4.46417C15.1323 4.38533 14.8885 4.36242 14.2817 4.356C14.1514 4.62977 13.9462 4.86102 13.6898 5.02293C13.4335 5.18485 13.1365 5.2708 12.8333 5.27083H9.16666C8.86346 5.2708 8.56649 5.18485 8.31015 5.02293C8.05381 4.86102 7.84861 4.62977 7.71832 4.356H7.7174ZM9.16666 3.4375C9.10588 3.4375 9.04759 3.46164 9.00461 3.50462C8.96163 3.5476 8.93749 3.60589 8.93749 3.66667C8.93749 3.72745 8.96163 3.78574 9.00461 3.82871C9.04759 3.87169 9.10588 3.89583 9.16666 3.89583H12.8333C12.8941 3.89583 12.9524 3.87169 12.9954 3.82871C13.0383 3.78574 13.0625 3.72745 13.0625 3.66667C13.0625 3.60589 13.0383 3.5476 12.9954 3.50462C12.9524 3.46164 12.8941 3.4375 12.8333 3.4375H9.16666ZM5.22499 9.06217C4.39082 9.18317 3.98657 9.40317 3.73082 9.73133C3.47416 10.0586 3.35957 10.5032 3.44482 11.3428C3.53191 12.2008 3.81149 13.3228 4.20932 14.9178C4.46416 15.9335 4.64016 16.6375 4.84182 17.1637C5.03432 17.6715 5.22407 17.9401 5.46241 18.1262C5.69982 18.3113 6.00599 18.4296 6.54682 18.4947C7.10599 18.5616 7.83015 18.5625 8.87882 18.5625H13.123C14.1707 18.5625 14.8967 18.5616 15.455 18.4947C15.9958 18.4305 16.302 18.3113 16.5394 18.1262C16.7777 17.9401 16.9666 17.6715 17.1609 17.1637C17.3607 16.6375 17.5377 15.9335 17.7916 14.9178C18.1903 13.3228 18.4699 12.2008 18.5561 11.3428C18.6422 10.5032 18.5267 10.0577 18.271 9.73042C18.0152 9.40317 17.611 9.18317 16.7759 9.06217C15.9234 8.93933 14.7666 8.9375 13.123 8.9375H8.87882C7.23524 8.9375 6.07841 8.93933 5.22591 9.06217H5.22499Z" fill="#176BA4"/>
</svg>
        </div>
   </div>
    
    <div className='mt-[2rem] flex flex-col gap-1'>

    <h1 className='text-[22px] font-medium'>Chicken Breast - Boneless</h1>
    <p className='text-[13px] text-slate-500'>450 g | 2-7 Pieces</p>
    <div className='flex items-baseline gap-2'>
        <p className='text-slate-500 line-through text-[15px]'>QA 150</p>
        <p className='text-[20px]'>QA 100</p>
    </div>
    </div>

 
</div>


<div className='   justify-evenly  w-[302px] mt-12 flex flex-col items-center ' >
   <div className='h-[202px]  w-[302px] rounded-2xl relative'>

    <img src={chicken} alt="" className='h-[202px]  w-[302px] rounded-2xl   ' />

        <div className='w-[46px] h-[46px] bg-white flex items-center justify-center rounded-full border-[1px] border-[#176BA4] absolute -bottom-[23px] right-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71649 2.97917C7.97316 2.43833 8.52591 2.0625 9.16666 2.0625H12.8333C13.4732 2.0625 14.0259 2.43833 14.2835 2.97917C14.9096 2.98467 15.3982 3.01308 15.8345 3.18358C16.3554 3.38733 16.8084 3.73359 17.1417 4.18275C17.4781 4.63467 17.6357 5.21583 17.853 6.01425L17.8869 6.13892L18.4277 8.12533C18.7887 8.30676 19.1049 8.56599 19.3536 8.88433C19.9237 9.61492 20.0246 10.4848 19.9237 11.4822C19.8247 12.4502 19.5204 13.6693 19.1391 15.1956L19.1143 15.2918C18.8732 16.2571 18.6771 17.0408 18.4452 17.6523C18.2013 18.2903 17.8933 18.8127 17.3846 19.2097C16.8767 19.6066 16.2947 19.778 15.6172 19.8605C14.9673 19.9375 14.1597 19.9375 13.1652 19.9375H8.83482C7.84024 19.9375 7.03174 19.9375 6.38274 19.8596C5.70441 19.7789 5.12324 19.6066 4.61449 19.2087C4.10666 18.8127 3.79866 18.2903 3.55482 17.6523C3.32199 17.0408 3.12674 16.2571 2.88566 15.2918L2.86091 15.1956C2.47957 13.6693 2.17432 12.4502 2.07624 11.4831C1.97541 10.4839 2.07624 9.61492 2.64549 8.88433C2.90491 8.5525 3.21566 8.30683 3.57132 8.12533L4.11216 6.13892L4.14699 6.01425C4.36424 5.21583 4.52191 4.63467 4.85832 4.18183C5.19174 3.73302 5.64473 3.38708 6.16549 3.18358C6.60182 3.01308 7.08949 2.98375 7.71649 2.97917ZM7.7174 4.356C7.11057 4.36242 6.86766 4.38533 6.66599 4.46417C6.38546 4.57387 6.14148 4.76035 5.96199 5.00225C5.80066 5.2195 5.70532 5.52292 5.43949 6.501L5.11499 7.68992C6.06649 7.5625 7.29482 7.5625 8.82015 7.5625H13.1789C14.7052 7.5625 15.9335 7.5625 16.8841 7.68992L16.5605 6.501C16.2937 5.52292 16.1993 5.2195 16.038 5.00225C15.8585 4.76035 15.6145 4.57387 15.334 4.46417C15.1323 4.38533 14.8885 4.36242 14.2817 4.356C14.1514 4.62977 13.9462 4.86102 13.6898 5.02293C13.4335 5.18485 13.1365 5.2708 12.8333 5.27083H9.16666C8.86346 5.2708 8.56649 5.18485 8.31015 5.02293C8.05381 4.86102 7.84861 4.62977 7.71832 4.356H7.7174ZM9.16666 3.4375C9.10588 3.4375 9.04759 3.46164 9.00461 3.50462C8.96163 3.5476 8.93749 3.60589 8.93749 3.66667C8.93749 3.72745 8.96163 3.78574 9.00461 3.82871C9.04759 3.87169 9.10588 3.89583 9.16666 3.89583H12.8333C12.8941 3.89583 12.9524 3.87169 12.9954 3.82871C13.0383 3.78574 13.0625 3.72745 13.0625 3.66667C13.0625 3.60589 13.0383 3.5476 12.9954 3.50462C12.9524 3.46164 12.8941 3.4375 12.8333 3.4375H9.16666ZM5.22499 9.06217C4.39082 9.18317 3.98657 9.40317 3.73082 9.73133C3.47416 10.0586 3.35957 10.5032 3.44482 11.3428C3.53191 12.2008 3.81149 13.3228 4.20932 14.9178C4.46416 15.9335 4.64016 16.6375 4.84182 17.1637C5.03432 17.6715 5.22407 17.9401 5.46241 18.1262C5.69982 18.3113 6.00599 18.4296 6.54682 18.4947C7.10599 18.5616 7.83015 18.5625 8.87882 18.5625H13.123C14.1707 18.5625 14.8967 18.5616 15.455 18.4947C15.9958 18.4305 16.302 18.3113 16.5394 18.1262C16.7777 17.9401 16.9666 17.6715 17.1609 17.1637C17.3607 16.6375 17.5377 15.9335 17.7916 14.9178C18.1903 13.3228 18.4699 12.2008 18.5561 11.3428C18.6422 10.5032 18.5267 10.0577 18.271 9.73042C18.0152 9.40317 17.611 9.18317 16.7759 9.06217C15.9234 8.93933 14.7666 8.9375 13.123 8.9375H8.87882C7.23524 8.9375 6.07841 8.93933 5.22591 9.06217H5.22499Z" fill="#176BA4"/>
</svg>
        </div>
   </div>
    
    <div className='mt-[2rem] flex flex-col gap-1'>

    <h1 className='text-[22px] font-medium'>Chicken Breast - Boneless</h1>
    <p className='text-[13px] text-slate-500'>450 g | 2-7 Pieces</p>
    <div className='flex items-baseline gap-2'>
        <p className='text-slate-500 line-through text-[15px]'>QA 150</p>
        <p className='text-[20px]'>QA 100</p>
    </div>
    </div>

 
</div>

<div className='   justify-evenly  w-[302px] mt-12 flex flex-col items-center ' >
   <div className='h-[202px]  w-[302px] rounded-2xl relative'>

    <img src={chicken} alt="" className='h-[202px]  w-[302px] rounded-2xl   ' />

        <div className='w-[46px] h-[46px] bg-white flex items-center justify-center rounded-full border-[1px] border-[#176BA4] absolute -bottom-[23px] right-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71649 2.97917C7.97316 2.43833 8.52591 2.0625 9.16666 2.0625H12.8333C13.4732 2.0625 14.0259 2.43833 14.2835 2.97917C14.9096 2.98467 15.3982 3.01308 15.8345 3.18358C16.3554 3.38733 16.8084 3.73359 17.1417 4.18275C17.4781 4.63467 17.6357 5.21583 17.853 6.01425L17.8869 6.13892L18.4277 8.12533C18.7887 8.30676 19.1049 8.56599 19.3536 8.88433C19.9237 9.61492 20.0246 10.4848 19.9237 11.4822C19.8247 12.4502 19.5204 13.6693 19.1391 15.1956L19.1143 15.2918C18.8732 16.2571 18.6771 17.0408 18.4452 17.6523C18.2013 18.2903 17.8933 18.8127 17.3846 19.2097C16.8767 19.6066 16.2947 19.778 15.6172 19.8605C14.9673 19.9375 14.1597 19.9375 13.1652 19.9375H8.83482C7.84024 19.9375 7.03174 19.9375 6.38274 19.8596C5.70441 19.7789 5.12324 19.6066 4.61449 19.2087C4.10666 18.8127 3.79866 18.2903 3.55482 17.6523C3.32199 17.0408 3.12674 16.2571 2.88566 15.2918L2.86091 15.1956C2.47957 13.6693 2.17432 12.4502 2.07624 11.4831C1.97541 10.4839 2.07624 9.61492 2.64549 8.88433C2.90491 8.5525 3.21566 8.30683 3.57132 8.12533L4.11216 6.13892L4.14699 6.01425C4.36424 5.21583 4.52191 4.63467 4.85832 4.18183C5.19174 3.73302 5.64473 3.38708 6.16549 3.18358C6.60182 3.01308 7.08949 2.98375 7.71649 2.97917ZM7.7174 4.356C7.11057 4.36242 6.86766 4.38533 6.66599 4.46417C6.38546 4.57387 6.14148 4.76035 5.96199 5.00225C5.80066 5.2195 5.70532 5.52292 5.43949 6.501L5.11499 7.68992C6.06649 7.5625 7.29482 7.5625 8.82015 7.5625H13.1789C14.7052 7.5625 15.9335 7.5625 16.8841 7.68992L16.5605 6.501C16.2937 5.52292 16.1993 5.2195 16.038 5.00225C15.8585 4.76035 15.6145 4.57387 15.334 4.46417C15.1323 4.38533 14.8885 4.36242 14.2817 4.356C14.1514 4.62977 13.9462 4.86102 13.6898 5.02293C13.4335 5.18485 13.1365 5.2708 12.8333 5.27083H9.16666C8.86346 5.2708 8.56649 5.18485 8.31015 5.02293C8.05381 4.86102 7.84861 4.62977 7.71832 4.356H7.7174ZM9.16666 3.4375C9.10588 3.4375 9.04759 3.46164 9.00461 3.50462C8.96163 3.5476 8.93749 3.60589 8.93749 3.66667C8.93749 3.72745 8.96163 3.78574 9.00461 3.82871C9.04759 3.87169 9.10588 3.89583 9.16666 3.89583H12.8333C12.8941 3.89583 12.9524 3.87169 12.9954 3.82871C13.0383 3.78574 13.0625 3.72745 13.0625 3.66667C13.0625 3.60589 13.0383 3.5476 12.9954 3.50462C12.9524 3.46164 12.8941 3.4375 12.8333 3.4375H9.16666ZM5.22499 9.06217C4.39082 9.18317 3.98657 9.40317 3.73082 9.73133C3.47416 10.0586 3.35957 10.5032 3.44482 11.3428C3.53191 12.2008 3.81149 13.3228 4.20932 14.9178C4.46416 15.9335 4.64016 16.6375 4.84182 17.1637C5.03432 17.6715 5.22407 17.9401 5.46241 18.1262C5.69982 18.3113 6.00599 18.4296 6.54682 18.4947C7.10599 18.5616 7.83015 18.5625 8.87882 18.5625H13.123C14.1707 18.5625 14.8967 18.5616 15.455 18.4947C15.9958 18.4305 16.302 18.3113 16.5394 18.1262C16.7777 17.9401 16.9666 17.6715 17.1609 17.1637C17.3607 16.6375 17.5377 15.9335 17.7916 14.9178C18.1903 13.3228 18.4699 12.2008 18.5561 11.3428C18.6422 10.5032 18.5267 10.0577 18.271 9.73042C18.0152 9.40317 17.611 9.18317 16.7759 9.06217C15.9234 8.93933 14.7666 8.9375 13.123 8.9375H8.87882C7.23524 8.9375 6.07841 8.93933 5.22591 9.06217H5.22499Z" fill="#176BA4"/>
</svg>
        </div>
   </div>
    
    <div className='mt-[2rem] flex flex-col gap-1'>

    <h1 className='text-[22px] font-medium'>Chicken Breast - Boneless</h1>
    <p className='text-[13px] text-slate-500'>450 g | 2-7 Pieces</p>
    <div className='flex items-baseline gap-2'>
        <p className='text-slate-500 line-through text-[15px]'>QA 150</p>
        <p className='text-[20px]'>QA 100</p>
    </div>
    </div>

 
</div>

<div className='   justify-evenly  w-[302px] mt-12 flex flex-col items-center ' >
   <div className='h-[202px]  w-[302px] rounded-2xl relative'>

    <img src={chicken} alt="" className='h-[202px]  w-[302px] rounded-2xl   ' />

        <div className='w-[46px] h-[46px] bg-white flex items-center justify-center rounded-full border-[1px] border-[#176BA4] absolute -bottom-[23px] right-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71649 2.97917C7.97316 2.43833 8.52591 2.0625 9.16666 2.0625H12.8333C13.4732 2.0625 14.0259 2.43833 14.2835 2.97917C14.9096 2.98467 15.3982 3.01308 15.8345 3.18358C16.3554 3.38733 16.8084 3.73359 17.1417 4.18275C17.4781 4.63467 17.6357 5.21583 17.853 6.01425L17.8869 6.13892L18.4277 8.12533C18.7887 8.30676 19.1049 8.56599 19.3536 8.88433C19.9237 9.61492 20.0246 10.4848 19.9237 11.4822C19.8247 12.4502 19.5204 13.6693 19.1391 15.1956L19.1143 15.2918C18.8732 16.2571 18.6771 17.0408 18.4452 17.6523C18.2013 18.2903 17.8933 18.8127 17.3846 19.2097C16.8767 19.6066 16.2947 19.778 15.6172 19.8605C14.9673 19.9375 14.1597 19.9375 13.1652 19.9375H8.83482C7.84024 19.9375 7.03174 19.9375 6.38274 19.8596C5.70441 19.7789 5.12324 19.6066 4.61449 19.2087C4.10666 18.8127 3.79866 18.2903 3.55482 17.6523C3.32199 17.0408 3.12674 16.2571 2.88566 15.2918L2.86091 15.1956C2.47957 13.6693 2.17432 12.4502 2.07624 11.4831C1.97541 10.4839 2.07624 9.61492 2.64549 8.88433C2.90491 8.5525 3.21566 8.30683 3.57132 8.12533L4.11216 6.13892L4.14699 6.01425C4.36424 5.21583 4.52191 4.63467 4.85832 4.18183C5.19174 3.73302 5.64473 3.38708 6.16549 3.18358C6.60182 3.01308 7.08949 2.98375 7.71649 2.97917ZM7.7174 4.356C7.11057 4.36242 6.86766 4.38533 6.66599 4.46417C6.38546 4.57387 6.14148 4.76035 5.96199 5.00225C5.80066 5.2195 5.70532 5.52292 5.43949 6.501L5.11499 7.68992C6.06649 7.5625 7.29482 7.5625 8.82015 7.5625H13.1789C14.7052 7.5625 15.9335 7.5625 16.8841 7.68992L16.5605 6.501C16.2937 5.52292 16.1993 5.2195 16.038 5.00225C15.8585 4.76035 15.6145 4.57387 15.334 4.46417C15.1323 4.38533 14.8885 4.36242 14.2817 4.356C14.1514 4.62977 13.9462 4.86102 13.6898 5.02293C13.4335 5.18485 13.1365 5.2708 12.8333 5.27083H9.16666C8.86346 5.2708 8.56649 5.18485 8.31015 5.02293C8.05381 4.86102 7.84861 4.62977 7.71832 4.356H7.7174ZM9.16666 3.4375C9.10588 3.4375 9.04759 3.46164 9.00461 3.50462C8.96163 3.5476 8.93749 3.60589 8.93749 3.66667C8.93749 3.72745 8.96163 3.78574 9.00461 3.82871C9.04759 3.87169 9.10588 3.89583 9.16666 3.89583H12.8333C12.8941 3.89583 12.9524 3.87169 12.9954 3.82871C13.0383 3.78574 13.0625 3.72745 13.0625 3.66667C13.0625 3.60589 13.0383 3.5476 12.9954 3.50462C12.9524 3.46164 12.8941 3.4375 12.8333 3.4375H9.16666ZM5.22499 9.06217C4.39082 9.18317 3.98657 9.40317 3.73082 9.73133C3.47416 10.0586 3.35957 10.5032 3.44482 11.3428C3.53191 12.2008 3.81149 13.3228 4.20932 14.9178C4.46416 15.9335 4.64016 16.6375 4.84182 17.1637C5.03432 17.6715 5.22407 17.9401 5.46241 18.1262C5.69982 18.3113 6.00599 18.4296 6.54682 18.4947C7.10599 18.5616 7.83015 18.5625 8.87882 18.5625H13.123C14.1707 18.5625 14.8967 18.5616 15.455 18.4947C15.9958 18.4305 16.302 18.3113 16.5394 18.1262C16.7777 17.9401 16.9666 17.6715 17.1609 17.1637C17.3607 16.6375 17.5377 15.9335 17.7916 14.9178C18.1903 13.3228 18.4699 12.2008 18.5561 11.3428C18.6422 10.5032 18.5267 10.0577 18.271 9.73042C18.0152 9.40317 17.611 9.18317 16.7759 9.06217C15.9234 8.93933 14.7666 8.9375 13.123 8.9375H8.87882C7.23524 8.9375 6.07841 8.93933 5.22591 9.06217H5.22499Z" fill="#176BA4"/>
</svg>
        </div>
   </div>
    
    <div className='mt-[2rem] flex flex-col gap-1'>

    <h1 className='text-[22px] font-medium'>Chicken Breast - Boneless</h1>
    <p className='text-[13px] text-slate-500'>450 g | 2-7 Pieces</p>
    <div className='flex items-baseline gap-2'>
        <p className='text-slate-500 line-through text-[15px]'>QA 150</p>
        <p className='text-[20px]'>QA 100</p>
    </div>
    </div>

 
</div>


</div>





</div>
  )
}
