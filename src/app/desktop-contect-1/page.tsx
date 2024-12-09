import Image from "next/image"

const Page1 =()=>{
 return (
    <div>
       
        <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto   px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <span className="text-white font-bold text-xl">Bandage</span>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#product" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</a>
        <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
        <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
        <a href="#member" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Become a Member</a>
      </div>
      
    </div>
  </div>
</nav>



  {/* <!-- Hero Section --> */}
  
  <header className="text-center py-16 bg-blue-50 justify-center ">
    <h1 className="text-4xl font-extrabold text-gray-800">WHAT WE DO</h1>
    <p className="font-Montserrat text-[58px] leading-[80px] font-[700] tracking-[0.2px] text-gray-600">
    Innovation tailored for you
  </p>



  </header>

  {/* <!-- Footer --> */}
  <footer className="text-center py-6 text-gray-800 ">
    <a href="#" className="hover:underline">Home</a> | 
    <a href="#" className="hover:underline">Team</a>
  </footer>


<div>
  <Image src="/images/logoone.png" alt="logo" width={1440} height={530}/>
  </div>


  <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-extrabold text-gray-800">Meet Our Team</h2>
</div>
</section>
   <div className="max-w-7xl mx-auto px-6   justify-center item-center text-center">
    <Image src="/images/row.png" alt="logo" width={1034} height={383}/>
    <Image src="/images/row2.png" alt="logo" width={1034} height={383}/>
    <Image src="/images/row3.png" alt="logo" width={1034} height={383}/>


   </div>
     
   <section className=" py-16">
  <div className="max-w-3xl mx-auto text-center text-[#252B42]">
    <h2 className="text-3xl font-extrabold">Start your 14 days free trial</h2>
  </div>
</section>

<section className="text-center py-8">
  <p className="text-gray-600 text-lg">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
  <p className="mt-2 text-gray-800 font-bold">RELIT official consequent.</p>
</section>
<div className="flex items-center justify-center ">
  <button className="bg-blue-600 text-white hover:bg-blue-700 w-[186px] h-[52px] rounded-[5px] gap-[10px] flex justify-center items-center">
    Try it free now
  </button>
</div>
 
 <div className="flex justify-center items-center">
<Image  src="/images/sm.png" alt="logo" width={242} height={50} />
</div>


      

<div className="w-[1050px] h-[138px] left-[195px] top-[40px] bottom-[40px] gap-[577.5px] flex justify-center items-center">
  <div className="flex justify-center items-center w-[1049px] h-[58px] gap-[577.5px]">
    <div className="w-[236px] h-[58px]">
      <div className="w-[187px] h-[58px] ">
        <div className="w-[108px] h-[32px] top-[13px] font-Montserrat font-[700]  flex justify-center items-center gap-[577.5px] text-[24px] leading-[32px] tracking-[0.1px]">
          <h3>Bandage</h3>
        </div>
      </div>
    </div>
    
    <div className="w-[112px] h-[24px]">
      <Image src="/images/col-md-3.png" alt="logo" width={236} height={24} />
    </div>
  </div>
</div>

    
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      
      {/* <!-- Column 1 --> */}
      <div>
        <h3 className="font-bold text-gray-800">Bandage</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li><a href="#" className="hover:text-blue-600">Company Info</a></li>
          <li><a href="#" className="hover:text-blue-600">Legal</a></li>
          <li><a href="#" className="hover:text-blue-600">Features</a></li>
          <li><a href="#" className="hover:text-blue-600">Resources</a></li>
        </ul>
      </div>

      {/* <!-- Column 2 --> */}
      <div>
        <h3 className="font-bold text-gray-800">Get In Touch</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Business Marketing</a></li>
          <li><a href="#" className="hover:text-blue-600">IOS & Android</a></li>
          <li><a href="#" className="hover:text-blue-600">Your Email</a></li>
          <li><a href="#" className="hover:text-blue-600">Subscribe</a></li>
        </ul>
      </div>

      {/* <!-- Column 3 --> */}
      <div>
        <h3 className="font-bold text-gray-800">Carrier</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li><a href="#" className="hover:text-blue-600">User Analytic</a></li>
          <li><a href="#" className="hover:text-blue-600">Watch a Demo</a></li>
          <li><a href="#" className="hover:text-blue-600">We are hiring</a></li>
          <li><a href="#" className="hover:text-blue-600">Live Chat</a></li>
        </ul>
      </div>

      {/* <!-- Column 4 --> */}
      <div>
        <h3 className="font-bold text-gray-800">Customers</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li><a href="#" className="hover:text-blue-600">Lore imp sum dolor Amit</a></li>
          <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600">Unlimited Support</a></li>
          <li><a href="#" className="hover:text-blue-600">API</a></li>
          <li><a href="#" className="hover:text-blue-600">Made With Love By Finland All Right Reserved</a></li>
        </ul>
      </div>

    </div>
  </div>
</section>





    </div> 
 )
}
export default Page1