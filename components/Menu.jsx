import Separator from "./Separator";
import MenuItem from "./MenuItem";

const menuItems = [
    {
        imgSrc: "/assets/menu/coffee-1.png", // Fixed file name typo
        name: "Espresso",
        description: "Rich and bold shot of coffee",
        price: 1200,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: 1300,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        description: "Espresso with steamed milk",
        price: 1100,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        description: "Espresso with hot water",
        price: 900,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: 1200,
    },
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Macchiato",
        description: "Espresso with a dollop of foam",
        price: 1200,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Flat White",
        description: "Espresso with microfoam milk",
        price: 1400,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Iced Coffee",
        description: "Chilled coffee over ice and milk",
        price: 1000,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Affogato",
        description: "Espresso shot over vanilla ice cream",
        price: 1250,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Irish Coffee",
        description: "Coffee with Irish whiskey and cream",
        price: 1850,
    },
];

const Menu = () => {
    return (
        <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 mb-12 xl:mb-24">
                    <h2 className="h2 text-center">Our Menu</h2>
                    <div className="mb-4">
                        <Separator bg="accent" />
                    </div>
                    <p className="text-center max-w-[620px] mx-auto">
                        Discover our handcrafted coffee selections. From rich espressos to velvety lattes, indulge in our range of beverages made to elevate your day.
                    </p>
                </div>
                {/* Menu Grid and Button */}
                <div className="flex flex-col items-center gap-12 xl:gap-24">
                    <div
                        className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center"
                    >
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item.name} // Use name as the unique identifier
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                imgSrc={item.imgSrc}
                            />
                        ))}
                    </div>
                    <button className="btn">View Full Menu</button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
