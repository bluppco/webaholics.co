// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { FaRegChartBar, FaRegUser } from "react-icons/fa"

// IMPORT JSX LAYOUTS
import ContainerSmallJsx from "@/layouts/container-small/jsx"

// IMPORT JSX ATOMS
import ButtonPurpleJsx from "@/atoms/atoms-shiva/buttons/purple/jsx"
import HeadingTwoFourXlLight from "@/atoms/atoms-shiva/headings/two/4xl/light/jsx"
import LinkJsx from "@/atoms/links/jsx"
import ParagraphXlLightJsx from "@/atoms/atoms-shiva/paragraphs/xl/leading/jsx"
import PictureContainJsx from "@/atoms/picture/internal/contain/jsx"

// HARDCODED DATA
const button_data = [

    {
        icon: <FaRegUser size={30} />,
        text: "Lead Generation",
    },
    {
        icon: <FaRegChartBar size={30} />,
        text: "E Commerce",
    },

]
const card_data = [

    {
        bold_title: "AI-Powered",
        button_link: "/",
        button_text: "APPLY TODAY!",
        description: "Boost lead generation with advanced AI: target, automate, and gain insights to convert quality leads. Our AI solutions, including predictive analytics, chatbots, and automated emails, drive growth and optimize marketing.",
        image_source_one: "/images/hubspot.png",
        image_source_three: "/images/hubspot-two.png",
        image_source_two: "/images/hubspot-one.png",
        logo: "/logos/hubspot-clio.png",
        title: " Lead Generation Solutions",
    },
    {
        bold_title: "OneApp:",
        button_link: "/",
        button_text: "REQUEST A DEMO",
        description: "Manage all sales channels, inventory synchronization, and in-house shipping from one central dashboard. Automatically update listings across platforms in real-time and track all metrics efficiently.",
        image_source_one: "/images/oneapp.png",
        image_source_three: "/images/overflow.png",
        title: " Making Multi-Channel Ecommerce Simple",
    },

]


const LeadGenerationAndEcommerce = () => {

    const [activeTab, setActiveTab] = useState(0)

    return (

        <section className="py-14">
            <div className="flex flex-col md:flex-row justify-center border-b-2 border-blue-200">
                {
                
                    button_data.map( ( button, index ) => (

                        <button 
                            className={`flex flex-row md:flex-col items-center justify-center gap-1 px-10 py-4 mx-1 rounded ${ activeTab === index ? "bg-sky-500 text-white shadow-2xl shadow-blue-300" : "bg-white text-black" }`} 
                            onClick={() => setActiveTab( index )}
                        >
                            { button.icon }
                            { button.text }
                        </button>

                    ))
                    
                }
            </div>
            <ContainerSmallJsx>
                <div className="py-16">
                {
                
                    card_data.map( ( card, index ) =>
                            activeTab === index ? (

                                <div key={ index } className="flex flex-col-reverse lg:flex-row gap-8">
                                    <div className="flex flex-col gap-6 lg:w-1/2">
                                        <div className="flex items-center justify-center p-2 size-20 rounded-full bg-green-100">
                                            <span className="text-green-500">
                                                { button_data[index].icon }
                                            </span>
                                        </div>
                                        <HeadingTwoFourXlLight><span className="font-semibold">{ card.bold_title }</span> { card.title }</HeadingTwoFourXlLight>
                                        <ParagraphXlLightJsx>{ card.description }</ParagraphXlLightJsx>
                                        <LinkJsx href={card.button_link}>
                                            <ButtonPurpleJsx>{ card.button_text }</ButtonPurpleJsx>
                                        </LinkJsx>
                                        {

                                            card.logo &&
                                            <div className="max-w-80 aspect-[16/4]">
                                                <PictureContainJsx
                                                    alternative_text=""
                                                    source={ card.logo } 
                                                />
                                            </div>

                                        }
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="relative max-lg:flex flex-col items-center">
                                            {
                                            
                                                card.image_source_one && (

                                                    <div className="lg:absolute inset-0 w-full rounded-xl overflow-hidden aspect-[16/8] shadow-lg">
                                                        <PictureContainJsx
                                                            alternative_text=""
                                                            source={ card.image_source_one }
                                                        />
                                                    </div>

                                                )
                                            
                                            }
                                            {
                                            
                                                card.image_source_two && (

                                                    <div className="absolute lg:top-44 lg:-right-10 border-2 z-10 border-blue-500 rounded-xl overflow-hidden max-w-80 shadow-lg">
                                                        <PictureContainJsx
                                                            alternative_text=""
                                                            source={ card.image_source_two }
                                                        />
                                                    </div>

                                                )
                                            
                                            }
                                            {
                                            
                                                card.image_source_three && (

                                                    <div className="absolute lg:top-56 left-20 border-2 border-blue-500 rounded-xl overflow-hidden max-w-80 shadow-lg">
                                                        <PictureContainJsx
                                                            alternative_text=""
                                                            source={ card.image_source_three }
                                                        />
                                                    </div>

                                                )
                                            
                                            }
                                        </div>
                                    </div>
                                </div>

                            ) : null

                        )
                    
                    }
                </div>
            </ContainerSmallJsx>
        </section>

    )

}
export default LeadGenerationAndEcommerce
