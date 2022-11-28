import React from 'react';

const CarouselItems = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel w-full lg:w-1/2 ">
                    <div id="slide1" className="carousel-item relative w-full h-3/4  ">
                        <img src="https://assets.newatlas.com/dims4/default/53d6b91/2147483647/strip/true/crop/999x666+93+0/resize/720x480!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F4c%2F41%2Ff334880740f081baaf2d949c2ec0%2Fd7d21ee3fd5e58f1384546804d8e2df4.jpg" alt="" className="w-full h-3/4 " />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-3/4 ">
                        <img src="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80" alt="" className="w-full h-3/4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-3/4 ">
                        <img src="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960" alt="" className="w-full h-3/4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-3/4 ">
                        <img src="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80" alt="" className="w-full h-3/4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Best Way to <br /> Buy and Sell your Phones!</h1>
                    <p className="py-6">Whether you are looking for a good conditioned android phones ....Start from here!!</p>
                    <button className="btn btn-info bg-gradient-to-r from-cyan-600 to-info">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CarouselItems;