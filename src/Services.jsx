import React from 'react'

function Services() {
    const service = [
        {
            img: "https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=612x612&w=0&k=20&c=7l_HRkrBJ6ewkfYx1rQtNbDDWcf4V8dyo1GbiHmWGYs=",
            title: "Caterings",
            para: "Delicious and customized catering services for all occasions, ensuring a memorable dining experience."
        },
        {
            img: "https://wallpapers.com/images/hd/happy-birthday-cake-1350-x-900-picture-96hrj3c8gilo3316.jpg",
            title: "Birthdays",
            para: "Make birthdays extra special with our personalized decorations, cakes, and fun-filled arrangements."
        },
        {
            img: "https://media.istockphoto.com/id/955599110/photo/groom-put-a-wedding-ring-on-bride-hand.jpg?s=612x612&w=0&k=20&c=blV3PmoIb0H5_UIEBVFxlMFDlm-SyyhwUd3rXxk_zCI=",
            title: "Weddings",
            para: "Elegant wedding services with exquisite décor, catering, and planning to make your big day perfect."
        },
        {
            img: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg",
            title: "Events",
            para: "From corporate meetings to private parties, we provide seamless event management and hospitality."
        }
    ];
    return (
        <div className='serv'>
            <h1>Services We Provide</h1>
            <div className='shows'>{
                service.map((itm) => (
                    <div className='boxse'>
                        <div className="bimg" style={{
                            backgroundImage: `url('${itm.img}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}></div>
                        <h3>{itm.title}</h3>
                        <p>{itm.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services