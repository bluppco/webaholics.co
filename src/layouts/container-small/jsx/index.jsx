const ContainerSmallJsx = ( props ) => {

    return (

        <section className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mac:max-w-screen-xl 2xl:max-w-screen-xl h-full">
            { props.children }
        </section>

    )

}
export default ContainerSmallJsx
