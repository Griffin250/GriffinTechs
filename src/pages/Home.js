
import samEydeVgs from '../../src/assets/bannerImages/Sameyde.vgs.jpg'
import ConsultationSection from '../components/layouts/ConsultationSection.js'
import BlogPosts from './BlogPosts.js'
import ContactForm from './Contact.js'
import Hero1 from './Hero1.js'
import Hero2 from './Hero2.js'
import PricingSection from './PricingSection.js'
import Product from './Product.js'

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Home() {
    return (
        <>
       
       <Hero1/>
       <Hero2 />
        <PricingSection />
        <ConsultationSection />
        
    <div className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        
        <h2 className="text-5xl font-bold text-gray-700 mb-4">Our Services</h2>
        {/* Subtitle */}
        <h2 className="text-gray-600 text-3xl mb-8">
        The Best Defense is a Good Offense.
        </h2>
        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        As a leading Managed Service Provider in Agder, Sam-IT Technology Solutions partners with clients to take a proactive role in your IT.<b/>
         We mitigate problems before they happen.<br />
         When issues do arise, your team will have 24/7/365 access to IT support and a live Help Desk.
        </p>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Push to Deploy */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-600">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">IT Support</h3>
          <p className="text-gray-600">
          Computer & Network Setup, Management and Support<br />
            Vendor Coordination
          </p>
        </div>
        {/* SSL Certificates */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-600">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Managed Services</h3>
          <p className="text-gray-600">
          IT System Planning and Maintenance<br /> 
        Proactive Monitoring <br /> 
        On-Demand Support
          </p>
        </div>
        {/* Simple Queues */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-600">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Security</h3>
          <p className="text-gray-600">
          Malware Protection <br/>
          Monitoring<br/>
         Vulnerability Analysis<br/>
         Data Recovery Planning
          </p>
        </div>
        {/* Advanced Security */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-600 hover:text-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Help Deask</h3>
          <p className="text-gray-600">
          Direct Support to End Users
          </p>
        </div>
      </div>
    </div>



      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src={samEydeVgs}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-20"
        /><div className="absolute inset-0 bg-orange-300 opacity-20 -z-10"></div>
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#5db2f3] to-[#e9cf3e] opacity-50 "
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#cb8957] to-[#e18743] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center align-middle justify-center">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h3 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">Partner with GriffinTechs</h3>
            <p className="mt-8 text-pretty text-lg font-medium justify-center flex text-gray-300 sm:text-xl/8">
            We believe in building lasting partnerships with our clients. <br/>
            Our team is dedicated to providing personalized solutions that meet your -
            <br/> unique business needs, delivering exceptional service and support every step of the way.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>



      <div className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Lets bring your Dreams to Life</h2>
        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-8">
          Everything you need to deploy your app
        </p>
        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        We provide everything you need to develop, deploy, and maintain your applications seamlessly. <br/>
        Our team is here to help you at every step, from concept to launch, ensuring you have the right tools and support to achieve your goals.
        </p>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {/* Push to Deploy */}
        <div className="bg-gray-50 shadow-gray-500 p-6 rounded-lg shadow-md hover:bg-orange-600 hover:text-white text-gray-600  transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">Push to deploy</h3>
          <p className=" ">
          Easily bring your applications to life with our streamlined deployment services. With just a few steps, your app can be live and accessible. <br/>
          Our platform simplifies the deployment process so you can focus on what truly matters — building a great product.
          </p>
        </div>
        
        {/* SSL Certificates */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg cursor-pointer hover:bg-orange-600 hover:text-white transition-shadow">
          <h3 className="text-xl font-semibold mb-2">SSL certificates</h3>
          <p className="">
          We take security seriously. All our services come with SSL certificates to protect your app and user data, ensuring a secure environment and building trust with your users.<br/>
           Enjoy peace of mind knowing your application meets industry security standards.
          </p>
        </div>
        {/* Simple Queues */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-600 hover:text-white">
          <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
          <p className="">
          Our team is dedicated to providing you with responsive, knowledgeable support.<br/>
           Whether it’s troubleshooting or guidance on best practices, we're here to assist you every step of the way so you can focus on your core business.
          </p>
        </div>
        {/* Advanced Security */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-600
         hover:text-white hover:ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Advanced security</h3>
          <p className="">
          Safeguard your application with advanced security measures tailored to your needs. <br/>
          We provide multi-layered protection, monitoring, and proactive threat management to keep your data and users safe from vulnerabilities.
          </p>
        </div>
      </div>
    </div>

<Product/>
   { /*<Banner /> */} 
   <BlogPosts />
<ContactForm />
      </>
    )
  }
  