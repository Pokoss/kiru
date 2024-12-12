import React from 'react'
import { useForm } from '@inertiajs/react';
import { Input, Textarea } from '@material-tailwind/react';
import Layout from '@/Component/Layout';


function RoadConstructionScreen() {
    const { data, setData, processing, post, reset, errors } = useForm();

    const handleSubmit = e => {
        e.preventDefault();
        post('', {
            preserveScroll: true, preserveState: true,
            onSuccess: () => {
                // toast.success('We have received you request, we shall contact you shortly')
                reset();
                setData({})
            }
        });
    }
    return (
        <div>
            <div>

                <section className="p-6">
                    <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                        <img src="/images/gallery/kiru-02.JPG" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                        <div className="w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                            <div className="text-center">
                                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                                    Road and<span className="text-primary"> Drainage Construction</span>
                                </h3>

                            </div>

                            <p className="my-5 w-full text-start">
                                At Kiru General Services, we understand the vital role that roads and drainage systems play in connecting communities and supporting development. Our road construction services focus on creating durable, high-quality surfaces that ensure smooth transportation and withstand the test of time. We also design and install efficient drainage systems to prevent flooding, protect infrastructure, and promote environmental sustainability.

                                Whether it's a highway, urban road, or rural pathway, our team combines cutting-edge technology and best practices to deliver reliable infrastructure solutions tailored to your needs. Trust us to build roads and drainage systems that lay the foundation for growth and connectivity.
                            </p>
                            <form onSubmit={handleSubmit} className="self-stretch ng-untouched ng-pristine ng-valid">
                                <div>
                                    <div className='my-2'>
                                        <Input color="green" label='Name' value={data.name ?? ''} onChange={e => setData('name', e.target.value)} error={errors.name} />
                                        {errors.name && <span className='text-xs text-red-500'>{errors.name}</span>}
                                    </div>
                                    <div className='my-2'>
                                        <Input color="green" label='Email' value={data.email ?? ''} onChange={e => setData('email', e.target.value)} error={errors.email} />
                                        {errors.email && <span className='text-xs text-red-500'>{errors.email}</span>}
                                    </div>
                                    <div className='my-2'>
                                        <Input color="green" label='Phone' value={data.phone ?? ''} onChange={e => setData('phone', e.target.value)} error={errors.phone} />
                                        {errors.phone && <span className='text-xs text-red-500'>{errors.phone}</span>}
                                    </div>
                                    <div className='my-2'>
                                        <Textarea color="green" label="Extra Details" value={data.details ?? ''} onChange={e => setData('details', e.target.value)} error={errors.details} />
                                        {errors.details && <span className='text-xs text-red-500'>{errors.details}</span>}
                                    </div>
                                    <button type="submit" disabled={processing} className="w-full py-2 font-semibold bg-primary text-white rounded ">Send Request</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

RoadConstructionScreen.layout = page => <Layout children={page} />

export default RoadConstructionScreen