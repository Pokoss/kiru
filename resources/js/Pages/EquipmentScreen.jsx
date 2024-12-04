import Layout from '@/Component/Layout';
import React from 'react'

function EquipmentScreen() {
    const data = [
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name: "MOTOR GRADERS",
            description: `Caterpillar with a capacity of 140G 150Hp and are 2 in number`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            name: "VIBRO COMPACTORS",
            description: `Caterpillar C5533 with a capacity of 14TONNES, BOMAG BW 212D with a capacity of 14TONNES, Bitelli DTV370 with a capacity of 8TONNES`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            name: "EXCAVATORS",
            description: `Caterpillar 320D with a capacity of 20 TONNES and are 2 in number, Caterpillar Wheel Excavator M313D with a capacity of 15 TONNES`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            name: "BACK HOES",
            description: `CASE 570ST, JCB 3CX`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            name: "WATER BOWSERS",
            description: `ISUZU FVR with a capacity of 20,000 LITRES, FUSO with a capacity of 20,000 LITRES, FUSO with a capacity of 15,000 LITRES,`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            name: "SERVICE VANS",
            description: `3 Nissan Hardbody, 2 Toyota Hilux`,
        },
        {
            imageLink:
                "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
            name: "ASPHALT PAVER",
            description: `Bitelli BB 760 with a capacity of 175Hp`,
        },
        {
            imageLink:
                "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
            name: "SELF LOADER",
            description: `Isuzu FVR with a capacity of 30 Tonnes and are 2 in number, Lowbed Carrier with a capacity of 30 Tonnes and are 2 in number`,
        },
        {
            imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
            name: "DUMP TRUCKS",
            description: `Sino Trucks with a capacity of 18Cubics and are 12 in number, Concrete Mixers with a capacity of 1 Cubic Meter and are 8 in number, Pnuematic Rollers with a capacity of 5 Tonnes, Pnuematic Rollers with a capacity of 5 Tonnes, Pnuematic Rollers with a capacity of 15 Tonnes`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
            name: "PEDESTRAL ROLLERS",
            description: `2 Dynapac LP6500, 2 Bomag BW65`,
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
            name: "JUMPING COMPACTORS",
            description: `4 Bomag`,
        },
        
    ];

    return (

        <div>
            <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
                <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
                <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
                    Our<span className="text-primary"> Equipment</span>
                </h3>
            </div>
            <div className="p-5 grid">
                {data.map(({ imageLink, name, description }, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                            } items-center bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                    >
                        {/* Image */}
                        <div className="w-full sm:w-1/2">
                            <img
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                src={imageLink}
                                alt={name}
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full sm:w-1/2 p-5">
                            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                {name}
                            </h2>
                            <p className="mt-2 text-gray-600">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
EquipmentScreen.layout = page => <Layout children={page} />
export default EquipmentScreen