import React from "react";

function Home() {
    const promotions = [
        { id: 1, title: "Summer Blockbuster Deal", discount: "20% OFF", code: "SUMMER24" },
        { id: 2, title: "Family Package", discount: "1 Free Kid Ticket", code: "FAMILY" }
    ];

    return (
        <div>
            <h1>Now Showing</h1>
            {/* Movie carousel placholder */}

            <div className="promo-section">
                <h2>Special Offers</h2>
                {promotions.map(promo => (
                    <div key={promo.id} className="promo-card">
                        <h3>{promo.title}</h3>
                        <p>{promo.dicscount}</p>
                        <small>Code: {promo.code}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;