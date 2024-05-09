import welcome from '../assets/images/WelcomeMarsh.jpg';
import welcome2 from '../assets/images/WelcomeMarsh2.jpg';
import welcome3 from '../assets/images/WelcomeMarsh3.jpg';
import welcome4 from '../assets/images/WelcomeMarsh4.jpg';

const Hero = () => {
  return (
    <div className="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
            <img src={welcome} class="w-full" />
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
            <img src={welcome2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={welcome3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src={welcome4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
  )
}

export default Hero