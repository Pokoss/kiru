import Layout from '@/Component/Layout';
import React from 'react'

function EquipmentScreen() {
    const data = [
        {
            imageLink:
                "/images/equipment/motor-graders.jpg",
            name: "MOTOR GRADERS",
            description: `Caterpillar with a capacity of 140G 150Hp and are 2 in number`,
        },
        {
            imageLink:
                "/images/equipment/vibro-compactors.jpg",
            name: "VIBRO COMPACTORS",
            description: `Caterpillar C5533 with a capacity of 14TONNES, BOMAG BW 212D with a capacity of 14TONNES, Bitelli DTV370 with a capacity of 8TONNES`,
        },
        {
            imageLink:
                "/images/equipment/excavators.jpg",
            name: "EXCAVATORS",
            description: `Caterpillar 320D with a capacity of 20 TONNES and are 2 in number, Caterpillar Wheel Excavator M313D with a capacity of 15 TONNES`,
        },
        {
            imageLink:
                "/images/equipment/back-hoes.jpg",
            name: "BACK HOES",
            description: `CASE 570ST, JCB 3CX`,
        },
        {
            imageLink:
                "/images/equipment/water-bowser.jpg",
            name: "WATER BOWSERS",
            description: `ISUZU FVR with a capacity of 20,000 LITRES, FUSO with a capacity of 20,000 LITRES, FUSO with a capacity of 15,000 LITRES,`,
        },
        {
            imageLink:
                "/images/equipment/service-van.jpg",
            name: "SERVICE VANS",
            description: `3 Nissan Hardbody, 2 Toyota Hilux`,
        },
        {
            imageLink:
                "/images/equipment/asphalt-pavers.jpg",
            name: "ASPHALT PAVER",
            description: `Bitelli BB 760 with a capacity of 175Hp`,
        },
        {
            imageLink:
                "/images/equipment/self-loader.jpg",
            name: "SELF LOADER",
            description: `Isuzu FVR with a capacity of 30 Tonnes and are 2 in number, Lowbed Carrier with a capacity of 30 Tonnes and are 2 in number`,
        },
        {
            imageLink:
                "/images/equipment/dump-truck.jpg",
            name: "DUMP TRUCKS",
            description: `Sino Trucks with a capacity of 18Cubics and are 12 in number, Concrete Mixers with a capacity of 1 Cubic Meter and are 8 in number, Pnuematic Rollers with a capacity of 5 Tonnes, Pnuematic Rollers with a capacity of 5 Tonnes, Pnuematic Rollers with a capacity of 15 Tonnes`,
        },
        {
            imageLink:
                "/images/equipment/pesdistal-rollers.png",
            name: "PEDESTRAL ROLLERS",
            description: `2 Dynapac LP6500, 2 Bomag BW65`,
        },
        {
            imageLink:
                "/images/equipment/jumping-compactors.jpg",
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