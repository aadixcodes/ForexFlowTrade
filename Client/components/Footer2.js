// 'use client';

// import React from "react";
// import { usePathname } from 'next/navigation';

// const Footer2 = () => {
//   const pathname = usePathname();

//   // Hide on /admin or subpaths
//   if (pathname.startsWith('/admin')) return null;
//   if (pathname.startsWith('/dashboard')) return null;


//   return (
//     <footer className="bg-white text-black border-t border-gray-200 py-10 px-4">
//       <div className="max-w-7xl mx-auto space-y-5 text-sm leading-relaxed">
//         <p>
//           <span className="font-medium">IC Markets Global</span> is the trading name of Raw Trading Ltd, which is regulated by the Seychelles Financial Services Authority (FSA) with Securities Dealer's license number SD018.
//         </p>

//         <p>
//           <span className="font-semibold">Risk Warning:</span> Trading Forex and CFDs carries a high level of risk to your capital and you should only trade with money you can afford to lose. Trading Forex and CFDs may not be suitable for all investors, so please ensure that you fully understand the risks involved and seek independent advice if necessary. Please read and ensure you fully understand our{" "}
//           <a href="#" className="text-green-600 underline">Risk Disclosure</a>.
//         </p>

//         <p>
//           <span className="font-semibold">Restricted Countries:</span> Raw Trading Ltd does not provide services for residents of certain countries such as the United States of America, Canada, Brazil, Israel, New Zealand, Iran and North Korea (Democratic People's Republic of Korea) or a country where such distribution or use would be contrary to local law or regulation.
//         </p>

//         <p>
//           You must be 18 years old, or of legal age as determined in your country. Upon registering an account with Raw Trading Ltd, you acknowledge that you are registering{" "}
//           <a href="#" className="text-green-600 underline">at your own free will, without solicitation on behalf of Raw Trading Ltd</a>.
//         </p>

//         <p>
//           Raw Trading Ltd does not direct its website and services to any individual in any country in which the use of its website and services are prohibited by local laws or regulations. When accessing this website from a country in which its use may or may not be prohibited, it is the user's{" "}
//           <a href="#" className="text-green-600 underline hover:text-green-700 transition-colors duration-200">responsibility to ensure that any use of the website or services adheres to local laws or regulations</a>. Raw Trading Ltd does not affirm that the information on its website is suitable for all jurisdictions.
//         </p>

//         <p>
//           <a href="#" className="text-green-600 underline hover:text-green-700 transition-colors duration-200 font-semibold">Legal Documents</a>
//         </p>

//         <p className="pt-4 text-xs text-gray-500">
//           © {new Date().getFullYear()} ForexFlow. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;



'use client';

import React from "react";
import { usePathname } from 'next/navigation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaWhatsapp  } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

const Footer2 = () => {
  const pathname = usePathname();

   // Hide footer on /admin or any route under /admin/*
   if (pathname.startsWith('/admin')) return null;
   if (pathname.startsWith('/dashboard')) return null;

  return (
    <footer className="bg-[#0D1C1A] text-white pt-8 pb-4 px-4">
      <div className="max-w-7xl mx-auto rounded-lg shadow-lg relative" style={{background: '#0D1C1A'}}>
        {/* Top border accent */}
        <div className="h-1 w-full absolute top-0 left-0 rounded-t-lg" style={{background: '#43B852'}} />
        <div className="flex flex-col items-center py-10 px-6">
          {/* Logo and site name */}
          <div className="flex items-center gap-4 mb-4">
            {/* Placeholder logo icon */}
            <div className="bg-white/10 rounded-full p-4 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#43B852" strokeWidth="4" fill="none" />
                <path d="M16 24h16M24 16v16" stroke="#43B852" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-wide">ForexFlow</span>
          </div>

          {/* Disclaimer text */}
          <p className="text-center text-sm md:text-md italic text-gray-200 max-w-5xl mb-6">
            Investment is risky. You should not spend more than you can afford to lose and should ensure that you fully understand the risks involved. Using the products offered may not be suitable for everyone. Before you use these products, please take into consideration your level of experience, financial objectives and seek independent advice if necessary. It is the responsibility of the Client to ascertain whether he/she is permitted to use the services of the ForexFlow brand based on the legal requirements in his/her country of residence. Client must be aware that profits are on market risk and thus firm does not commits assures or guarantees about the returns and profits.
            <br/> <br/> Investments in securities are subject to market risks, which includes price fluctuation risk. There is no assurance or guarantee that the objectives of any of the products mentioned in this document or on this site will be achieved.
          </p>

          {/* Address and contact info */}
          <div className="text-center text-sm text-gray-300 mb-4">
            Floor, 355 NEX Tower, Ruedu Savoir, Cybercity, Ebene 72201, Mauritius
            <div className="mt-2">
              <span className="font-semibold">Phone:</span> 409-748-1384<br />
              <span className="font-semibold">Email:</span> support@forexflow.com
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 justify-center mb-4">
            <a href="https://api.whatsapp.com/send?phone=7880055659&text=Hello!%20I%20want%20to%20know%20about...%20" target="_blank" className="bg-[#19273A] hover:bg-[#43B852] text-white p-2 rounded transition-colors" aria-label="Twitter"><FaWhatsapp /></a>
            <a href="#" target="_blank" className="bg-[#19273A] hover:bg-[#43B852] text-white p-2 rounded transition-colors" aria-label="Facebook"><MdOutlineMailOutline /></a>
            <a href="#" target="_blank" className="bg-[#19273A] hover:bg-[#43B852] text-white p-2 rounded transition-colors" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center text-xs text-gray-400 pt-6">
        © {new Date().getFullYear()} <span className="font-semibold text-white">ForexFlow</span>. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer2;
