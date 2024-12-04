import Layout from '@/Component/Layout'
import Teamcard from '@/Component/Teamcard'
import React from 'react'

function AboutScreen() {
  const employees = [
    {
      'id': '1',
      'name': 'Eng. George Patrick Kiberu',
      'title': 'Technical Director',
      'image': '/images/gallery/kiru-01.JPG',
      'description': 'Holds a Bachelor’s in Civil and Building Engineering and a Higher Diploma in Civil and Construction Engineering from Kyambogo, is a registered engineer with ERB, and a corporate member of UPE.',
      'facebook': '',
      "twitter": '',
      "linkedIn": ''
    },
    {
      'id': '2',
      'name': 'George William Kiyega',
      'title': 'Projects Manager',
      'image': '/images/gallery/kiru-01.JPG',
      'description': `An experienced engineer with expertise in road construction, maintenance, and upgrading projects, including bituminous standards, drainage systems, and community infrastructure. Successfully managed projects for UNRA, schools, hospitals, and market construction, showcasing strong capabilities in urban and rural development.`,
      'facebook': '',
      "twitter": '',
      "linkedIn": ''
    },
    
  ]
  return (
    <div>
      <div>

        <div id="about" className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
              </svg>

              <div className="pt-1"></div>

              <main className="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="my-7 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                    About Kiru General Services
                  </h2>

                  <p className='lg:pr-10'>
                    Welcome to Kiru General Services Ltd, your trusted partner in roads, buildings, and waterworks construction. We are dedicated to delivering exceptional solutions that shape a brighter and more sustainable future.<br />

                    <br />Our Story<br />

                    Kiru General Services Ltd was established in 2004 as a company participating
                    in general civil works i.e. Buildings, Roads and Water works.<br /><br />

                    Its establishment was in response to the government’s efforts to encourage
                    fresh graduates from higher Institutions of learning to partake of selfemployment rather than job seeking from government institutions and as such
                    having a meaningful contribution towards the economy.
                    <br /><br />
                    Our Commitment
                    <br />
                    We are committed to a construction environment that maximizes sustainable
                    growth of contractors, provides recognizable housing and infrastructure,
                    employment and wealth creation.
                    <br /><br />


                    Partner with Us to Build the Future
                    <br />
                    Build a future of excellence with Kiru General Services Ltd. From constructing durable roads and modern buildings to delivering reliable waterworks solutions, we bring your visions to life. Let us pave the way to progress with our expertise, dedication, and commitment to quality. Contact us today to turn your ideas into enduring landmarks!


                  </p>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/gallery/kiru-01.JPG" alt="" />
          </div>
        </div>


        <div className="p-10 max-w-screen-lg mx-auto">
          <div className="text-center mb-4">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              THE TEAM
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Our<span className="text-primary"> Team</span>
            </h3>
          </div>
          <div className="sm:grid grid-cols-2 gap-6 my-10">

            {employees && employees.map((employee) => (

              <Teamcard employee={employee} />
            ))}


          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our<span className="text-primary"> Stats</span>
          </h3>
        </div>
        <div className="container my-24 px-6 mx-auto">


          <section className="mb-32 text-gray-800 text-center lg:text-left">
            <div className="block rounded-lg shadow-lg bg-white">
              <div className="flex flex-wrap items-center">
                <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                  <img
                    src="/images/gallery/kiru-01.JPG"
                    alt="Trendy Pants and Shoes"
                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="text-3xl font-bold mb-4 text-primary display-5">Why people trust us</h2>
                    <p className="text-gray-500 mb-12">
                    At Kiru General Services, excellence and reliability are at the core of everything we do. We take pride in delivering high-quality road, building, and water works solutions that stand the test of time. Our team of skilled professionals is dedicated to ensuring the success of every project, prioritizing safety, efficiency, and client satisfaction. With a proven track record of meeting deadlines and exceeding expectations, we are passionate about building infrastructure that transforms communities and fosters progress.
                    </p>

                    <div className="grid lg:gap-x-12 md:grid-cols-4">
                      <div className="mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-primary mb-4">67</h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">Complete Projects</h5>
                      </div>

                      <div className="">
                        <h2 className="text-3xl font-bold text-primary mb-4">08</h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">Ongoing Projects</h5>
                      </div>

                      <div className="mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-primary mb-4">72%</h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">Growth</h5>
                      </div>

                      <div className="mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-primary mb-4">164</h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">Staff</h5>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



        {/*Start Frequently asked Questions section*/}
        <h3 className="w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Frequent<span className="text-primary"> Questions</span>
        </h3>
        <section className="bg-white">
    <div className="container px-6 py-12 mx-auto">

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="inline-block p-3 text-white bg-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700">What services does Kiru General Services Ltd offer?</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Kiru General Services Ltd specializes in road construction, building projects, and waterworks, delivering reliable and high-quality engineering solutions across Uganda.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700">Does Kiru General Services Ltd handle large-scale projects?</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Yes, we have extensive experience managing both large-scale and community-level infrastructure projects, ensuring quality and timely delivery.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700">Can Kiru General Services Ltd assist with project design?</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Absolutely! We provide design and build services, including tailored project designs to meet your specific needs and requirements.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700">What regions in Uganda do you operate in?</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Kiru General Services Ltd operates nationwide, serving urban and rural areas with comprehensive construction solutions.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700">How do I request a quote for a project?</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        You can request a quote by contacting us through our website, email, or phone. Provide your project details, and our team will get back to you promptly.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700">What sets Kiru General Services apart from other companies?</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Our commitment to quality, reliability, and client satisfaction, combined with our skilled team and state-of-the-art technology, sets us apart in the construction industry.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>



        {/*End Frequently asked section*/}

        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Location</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Offices
              </p>
              {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                            in, accusamus quisquam.
                        </p> */}
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                      {/* <!-- Heroicon name: globe-alt --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>

                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Address
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Ntinda,<br />
                      Kampala, Uganda
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                      {/* <!-- Heroicon name: phone --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>

                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Phone number
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      +256-321-456-789
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                      {/* <!-- Heroicon name: mail --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>

                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Email
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      info@kiru.co.ug
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                      {/* <!-- Heroicon name: clock --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Working Hours
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Monday -  Friday: 9am to 5pm<br />
                      Saturday - 10am to 5pm<br />
                      Sunday -  10am to 3pm
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.960677219451!2d32.59941156419564!3d0.3586155813992737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba248db56809%3A0xc0c04ea86b709809!2sNsubuga%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1733312244467!5m2!1sen!2sus"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
AboutScreen.layout = page => <Layout children={page} />
export default AboutScreen