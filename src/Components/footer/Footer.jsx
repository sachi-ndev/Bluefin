import React from "react";
import footerlogo from "./../assets/FOOTERLOGO.png";
import footersocial from "./../assets/footer_social.png";
import footerpayment from "./../assets/footterpayment.png";

export default function Footer() {
  return (
    <div className="bg-[#454545] h-[527px] w-[100vw] p-10 flex text-white">
      <div className="w-[40%]  flex flex-col h-full justify-between">
        <img src={footerlogo} className="w-[220px]" alt="" />
        <p>
          is a berry that has gained popularity as a super due to its numerous
          health benefits. Incorporating acai into your diet is a berry that has
          gained popularity as a super
        </p>
        <img src={footersocial} className="w-[200px] mt-[2rem]" alt="" />

        <p className="mt-[10rem]">@2023 All Rights Reserved</p>
      </div>
    
<div className="w-[60%] h-full flex flex-col items-end">
      <div className=" w-[100%] h-full flex justify-between p-8">
        <div className="flex h-[70%] flex-col justify-evenly">
          <h1>My Account</h1>

          <li>Track Orders</li>
          <li>Shipping</li>
          <li>Wishlist</li>
          <li>Order History</li>
          <li>My Account</li>
        </div>
        <div className="flex h-[70%] flex-col justify-evenly">
          <h1>Information</h1>

          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </div>
        <div className="flex h-[70%] flex-col justify-evenly">
          <h1>Talk to Us</h1>
          <h3>Customer care</h3>
          <h1 className="font-medium">+89 62623 0000</h1>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              >
              <path
                d="M18.0886 4.3125C19.4781 4.3125 20.6042 5.43854 20.6042 6.82812V16.1719C20.6042 17.5615 19.4781 18.6875 18.0886 18.6875H4.91147C4.24428 18.6875 3.60442 18.4225 3.13265 17.9507C2.66088 17.4789 2.39584 16.8391 2.39584 16.1719V6.82812C2.39584 5.43854 3.52189 4.3125 4.91147 4.3125H18.0886ZM19.4063 8.79319L11.7885 12.983C11.7101 13.0261 11.6231 13.0511 11.5338 13.0562C11.4445 13.0612 11.3551 13.0462 11.2724 13.0122L11.2116 12.9835L3.59376 8.79271V16.1719C3.59376 16.5214 3.73259 16.8565 3.97971 17.1036C4.22683 17.3508 4.56199 17.4896 4.91147 17.4896H18.0886C18.438 17.4896 18.7732 17.3508 19.0203 17.1036C19.2674 16.8565 19.4063 16.5214 19.4063 16.1719V8.79319ZM18.0886 5.51042H4.91147C4.56199 5.51042 4.22683 5.64925 3.97971 5.89636C3.73259 6.14348 3.59376 6.47865 3.59376 6.82812V7.4266L11.5 11.7746L19.4063 7.42613V6.82812C19.4063 6.47865 19.2674 6.14348 19.0203 5.89636C18.7732 5.64925 18.438 5.51042 18.0886 5.51042Z"
                fill="white"
                />
            </svg>
            <h3 className="w-[10rem]">Care@bluefin.com</h3>
          </div>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              >
              <path
                d="M11.5 12.9375C10.7892 12.9375 10.0944 12.7267 9.50342 12.3318C8.91243 11.937 8.45181 11.3757 8.17981 10.719C7.90781 10.0623 7.83664 9.33977 7.9753 8.64265C8.11397 7.94553 8.45624 7.30518 8.95884 6.80259C9.46143 6.29999 10.1018 5.95772 10.7989 5.81905C11.496 5.68039 12.2186 5.75156 12.8753 6.02356C13.5319 6.29556 14.0932 6.75618 14.4881 7.34717C14.883 7.93816 15.0938 8.63298 15.0938 9.34375C15.0926 10.2965 14.7136 11.2099 14.0399 11.8837C13.3662 12.5574 12.4528 12.9364 11.5 12.9375ZM11.5 7.1875C11.0735 7.1875 10.6566 7.31396 10.3021 7.5509C9.94746 7.78783 9.67109 8.12459 9.50789 8.51859C9.34468 8.91259 9.30198 9.34614 9.38518 9.76442C9.46838 10.1827 9.67375 10.5669 9.9753 10.8685C10.2769 11.17 10.6611 11.3754 11.0793 11.4586C11.4976 11.5418 11.9312 11.4991 12.3252 11.3359C12.7192 11.1727 13.0559 10.8963 13.2929 10.5417C13.5298 10.1871 13.6563 9.77022 13.6563 9.34375C13.6557 8.77205 13.4283 8.22393 13.0241 7.81968C12.6198 7.41543 12.0717 7.18807 11.5 7.1875Z"
                fill="white"
                />
              <path
                d="M11.5 21.5625L5.43663 14.4117C5.35238 14.3043 5.269 14.1962 5.18651 14.0875C4.15078 12.7232 3.59125 11.0567 3.59376 9.34375C3.59376 7.24688 4.42674 5.2359 5.90945 3.75319C7.39216 2.27048 9.40314 1.4375 11.5 1.4375C13.5969 1.4375 15.6079 2.27048 17.0906 3.75319C18.5733 5.2359 19.4063 7.24688 19.4063 9.34375C19.4088 11.0559 18.8495 12.7216 17.8142 14.0853L17.8135 14.0875C17.8135 14.0875 17.5979 14.3707 17.5655 14.4088L11.5 21.5625ZM6.33363 13.2214C6.33507 13.2214 6.50182 13.4428 6.53992 13.4902L11.5 19.3401L16.4666 13.4823C16.4982 13.4428 16.6664 13.22 16.6671 13.2192C17.5132 12.1046 17.9704 10.7432 17.9688 9.34375C17.9688 7.62813 17.2872 5.98278 16.0741 4.76965C14.861 3.55653 13.2156 2.875 11.5 2.875C9.78439 2.875 8.13904 3.55653 6.92591 4.76965C5.71279 5.98278 5.03126 7.62813 5.03126 9.34375C5.02975 10.744 5.48679 12.1062 6.33363 13.2214Z"
                fill="white"
                />
            </svg>
            <h1 className="w-[10rem]">0654, box, Qatar Jamca, 678900</h1>
          </div>
        </div>
    </div>
      <img src={footerpayment} className="w-[15rem] mr-10" alt="" />
      </div>
    </div>
  );
}
