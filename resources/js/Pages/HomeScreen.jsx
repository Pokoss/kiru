import NavbarHome from '@/Component/NavbarHome'
import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import TestimonialCard from '@/Component/TestimonialCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Footer from '@/Component/Footer';
import { Link } from '@inertiajs/react';
import Events from '@/Component/Events';
import Layout from '@/Component/Layout';
function HomeScreen() {
  const testimonials = [
    {
      'id': '1',
      'title': 'Kiru made my house',
      'name': 'Kagwa Mike',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },
    {
      'id': '2',
      'title': 'I love Kiru',
      'name': 'Mulondo Yafessi',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },
    {
      'id': '3',
      'title': 'They made my dream come true',
      'name': 'Sigwe Yafessi',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },

  ]

  return (
    <div>
      <Carousel loop='true' autoplay='true' transition={{ duration: 2 }} className="h-[630px]">
        <div className="relative h-full w-full">
          <img
            src="/images/gallery/kiru-01.JPG"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 animate-fade-up">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Welcome to Kiru General Services
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  About Us
                </Button>
                <Button className='animate-bounce hover:motion-safe:animate-spin' size="lg" color="white" variant="text">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/images/gallery/kiru-02.JPG"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Road and Drainage Construction
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero possimus suscipit ut cupiditate laudantium assumenda sint adipisci nemo doloremque sunt provident ipsam, ducimus
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  View
                </Button>
                <Button size="lg" color="white" variant="text">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/images/gallery/kiru-06.JPG"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Building Construction
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam architecto sint facilis debitis necessitatibus illo magni, quasi assumenda commodi explicabo dolore?
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  View
                </Button>
                <Button size="lg" color="white" variant="text">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={'/images/gallery/kiru-03.jpg'}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Water and Sanitation
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, sequi quam, eveniet quidem consequuntur dolorum modi quis nulla omnis nobis architecto dignissim
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>


      {/* Slogan Section*/}
      <div className='w-full justify-center align-content-center items-center mt-10'>

        <div className='animate-fade-up'>

          <h3 className="w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            About<span className="text-primary"> Us</span>
          </h3>
        </div>
        <div className="max-w-xl mx-auto text-center py-10 md:py-10">
          {/* <div className="w-24 h-2 bg-blue-900 mb-4 mx-auto" data-aos='fade-down'></div>
<h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6" data-aos='fade-right'>We Are Experts</h2> */}
          <p className="font-light text-gray-600 mb-6 leading-relaxed" data-aos='fade-down'>
            {/* Welcome to Vialey Kankou Tours - Your Gateway to Memorable Experiences in Uganda! <br/> */}
            We Are Experts. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut harum pariatur ipsam tempore optio commodi cumque hic quos vero dolore voluptates qui blanditiis earum eius a, placeat sapiente nihil ratione?

          </p>
        </div>
      </div>
      {/* End Slogan Section*/}


      {/* Services */}
      <div className='animate-fade-up'>
        <h3 className="my-6 w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-primary"> Services</span>
        </h3>



      </div>
      {/*Mission Section*/}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="" data-aos='fade-right'>
            <img src="/images/gallery/kiru-02.JPG" className="w-full max-w-md" />
          </a>
        </div>
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md" data-aos='fade-left'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Road and Drainage Construction</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores animi esse eaque deserunt accusantium sint. Neque, quo nobis voluptatum ab deserunt veniam deleniti, ipsum possimus autem recusandae dolore molestias quam?
            </Typography>
            {/* </p> */}
            <Typography>
              <Link href="/road-and-drainage" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest item-left py-3 px-8 hover:bg-primary hover:text-white">View</Link>
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <a href="" data-aos='fade-left'>
            <img src="/images/gallery/kiru-06.JPG" className="w-full max-w-md" />
          </a>
        </div>
        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md" data-aos='fade-right'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Building Construction</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus et vitae saepe cupiditate error nam ducimus aspernatur, at officia impedit, ipsam, sed inventore quidem rerum. Illum, eveniet. Labore, sint?
              <Link href="/buildings" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Inquire more</Link>
              {/* </p> */}
              {/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="" data-aos='fade-right'>
            <img src={'/images/gallery/kiru-03.jpg'} className="w-full max-w-md" />
          </a>
        </div>
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md" data-aos='fade-left'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Water and Sanitation</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam quidem consequatur, blanditiis non libero magni animi alias voluptate accusantium facere, minus exercitationem. Fugiat unde nihil voluptas. Amet, laboriosam repudiandae?
            </Typography>
            {/* </p> */}
            <Typography>
              <Link href="/water-and-sanitation" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact</Link>
            </Typography>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-white p-12 md:p-24 flex justify-start items-center">
					<a href="" data-aos='fade-left'>
						<img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" className="w-full max-w-md" />
					</a>
				</div>
				<div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
					<div className="max-w-md" data-aos='fade-right'>
						<div className="w-24 h-2 bg-secondary mb-4"></div>
						<h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">FunaTicket system</h2>
						<p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
						<Typography>
							Seamless airport pickups and drop-offs for your hassle-free travel experience. Arrive and depart with ease as our professional team ensures your comfort and convenience. Your journey begins or ends on a stress-free note with us.
							<Link href="/airportpickup" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for Pickup</Link>
							</p>
							<a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a>
						</Typography>
					</div>
				</div>
			</div> */}

      {/* End Mission Section*/}
      {/* End Services */}


      {/* Events and Travel Section Section*/}
      {/* {events && events.length > 0 && */}
      <div style={{ backgroundImage: 'url("/images/gallery/kiru-02.jpg")', backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
        <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
          <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
            Our<span className="text-primary"> Projects</span>
          </h3>
        </div>


        <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12" data-aos='slide-up'>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/* {events && events.map((event, index) => (
                <Link key={index} href='/events/viewevent'>
                </Link>
                ))} */}

            <Events />
            <Events />
            <Events />


          </div>
          <div className='flex w-full justify-center mr-3 mt-7'>
            <Link href="/projectlist" className="inline-block border-2 border-primary font-semibold text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">More Projects</Link>
          </div>
        </div>
      </div>
      {/* } */}
      {/*End Events and Travel Section Section*/}



      {/*Testimonials  Section*/}
      {testimonials && testimonials.length > 0 &&
        <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
          <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
            Client's<span className="text-primary"> Testimonies</span>
          </h3>
        </div>
      }

      <Splide options={{
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      }} className='mx-12 hidden md:block mb-4'>
        {
          testimonials && testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))
        }
      </Splide>

      <Splide options={{
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
        arrows: false,
      }} className='mx-2 md:hidden'>
        {
          testimonials && testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))
        }
      </Splide>

      {/*End testimonial section*/}

      <section className="mb-32 text-gray-800">

        <div className="relative overflow-hidden h-96 bg-no-repeat bg-cover"
          style={{ backgroundPosition: '50%', backgroundImage: "url('/images/gallery/kiru-09.jpg')", backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        >
          <div className="max-w-xl mx-auto text-center pt-10 md:py-10 animate-fade-up">
            <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
            <h3 className="my-6 w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Contact<span className="text-primary"> Us</span>
            </h3>
          </div>
        </div>
        <div className="container text-gray-800 px-4 md:px-12" style={{ marginTop: "-200px", background: 'hsla(0, 0%, 100%, 0.8)' }}>
          <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-wrap" data-aos='zoom-in-left' >
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                <form>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                      placeholder="Name" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                      placeholder="Email address" />
                  </div>
                  <div className="form-group mb-6">
                    <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group form-check text-center mb-6">
                    <input type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="exampleCheck87" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
                      message</label>
                  </div>
                  <button type="submit" className="w-full px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Send
                  </button>
                </form>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div className="">
                  <a href='tel:256789737973' className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start bg-white p-2 rounded bg-opacity-70">
                      <div className="shrink-0">
                        <div className="p-4 bg-yellow-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Call Us</p>
                        <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed">+256-123-456-789</p>
                      </div>
                    </div>
                  </a>
                  <a href='mailto:info@kiru.co.ug' className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6 ">
                    <div className="flex items-start bg-white p-2 rounded bg-opacity-70">
                      <div className="shrink-0">
                        <div className="p-4 bg-yellow-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>

                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Email</p>
                        <p className="font-light text-gray-600 text-xs leading-relaxed">info@kiru.co.ug</p>
                      </div>
                    </div>
                  </a>




                </div>


              </div>
            </div>
          </div>
        </div>

      </section>
      <div className="map-container">
       
      </div>
    </div>

  )
}
HomeScreen.layout = page => <Layout children={page} />
export default HomeScreen