import Image from "next/image";

const Page2 = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">Bandage</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#home"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#product"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Product
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#login"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </a>
              <a
                href="#member"
                className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 bg-blue-50 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          WHAT WE DO
        </h1>
        <p className="mt-4 text-xl md:text-[48px] font-[700] tracking-[0.2px] text-gray-600">
          Innovation tailored for you
        </p>
      </header>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-800">
        <a href="#" className="hover:underline">
          Home
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Team
        </a>
      </footer>

      {/* Images Section */}
      <div>
        <Image src="/images/logoone.png" alt="logo" width={1440} height={530} />
      </div>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Meet Our Team</h2>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-center">
        <Image src="/images/row.png" alt="logo" width={1034} height={383} />
        <Image src="/images/row2.png" alt="logo" width={1034} height={383} />
        <Image src="/images/row3.png" alt="logo" width={1034} height={383} />
      </div>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center text-[#252B42]">
          <h2 className="text-3xl font-extrabold">
            Start your 14 days free trial
          </h2>
        </div>
      </section>

      <section className="text-center py-8">
        <p className="text-gray-600 text-lg">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <p className="mt-2 text-gray-800 font-bold">
          RELIT official consequent.
        </p>
      </section>

      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white hover:bg-blue-700 w-44 h-12 rounded-md flex justify-center items-center">
          Try it free now
        </button>
      </div>

      <div className="flex justify-center items-center">
        <Image src="/images/sm.png" alt="logo" width={242} height={50} />
      </div>

      {/* Footer Links Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-gray-800">Bandage</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Company Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-800">Get In Touch</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    IOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Your Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-gray-800">Carrier</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    User Analytic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-gray-800">Customers</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Lore imp sum dolor Amit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Unlimited Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Made With Love By Finland All Right Reserved
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page2;
