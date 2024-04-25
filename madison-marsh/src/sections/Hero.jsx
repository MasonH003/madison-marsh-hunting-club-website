
const Hero = () => {
  return (
    <div className="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
            <img src="https://media.discordapp.net/attachments/1097892086948315146/1232787934063755355/IMG-20240424-WA0012.jpg?ex=662b637b&is=662a11fb&hm=cd0991ca3f29d7c742526b90174b76b9a5eb98fb34198062bd3bcf5a0f96f687&=&format=webp&width=674&height=506" class="w-full" />
            <div class="absolute top-6 inset-0 flex flex-col items-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">Welcome to the Marsh</h1>
                <div className = "pt-4">
                    <a className = "text-4xl px-6 py-4 rounded-full text-white bg-primary hover:text-primary font-bold shadow-md hover:bg-neutral" href = "/SigninSignup">Join Now</a>
                </div>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://media.discordapp.net/attachments/1097892086948315146/1232787841977680003/Resized_20231209_164834_1713987775021.jpg?ex=662b6365&is=662a11e5&hm=600001dac929c757e7fae5cd0a3878c4da0f7ec88757954f2f9b8f94213d093c&=&format=webp&width=599&height=449" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://media.discordapp.net/attachments/1097892086948315146/1232787843676373062/Resized_20231229_072333_1713987750208.jpg?ex=662b6366&is=662a11e6&hm=46f818011ba228fa255cda727710fb0f3aa71e860336a28cfd31bfba777c518e&=&format=webp&width=599&height=449" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src="https://media.discordapp.net/attachments/1097892086948315146/1232787845333254184/IMG-20240424-WA0001.jpg?ex=662b6366&is=662a11e6&hm=8c446356db2df54976008b17a3b44cdaaf3cfac1035c0ce210307f8287177f7f&=&format=webp&width=599&height=449" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
  )
}

export default Hero