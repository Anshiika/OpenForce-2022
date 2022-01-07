import React from "react";
import "./SponsorsContainer.css";
import SponsorsSubContainer from "./SponsorsSubContainer/SponsorsSubContainer";
import stickermule from "./logo/stickermule.png";

function SponsorsContainer() {
    const sponsorTypes = [
        ["Diamond Sponsors 💎", ["1", "2", "3"]],
        ["Platinum Sponsors 🏆", ["4", "5", "6"]],
        ["Gold Sponsors 🥇", ["7", "8", "9"]],
        [
            "Silver Sponsors 🥈",
            [
                {
                    website: "https://www.stickermule.com/",
                    name: "Stickermule",
                    logo: stickermule,
                },
                "11",
                "12",
            ],
        ],
        ["Bronze Sponsors 🥉", ["12", "13", "14"]],
        ["Community Partners 🤝", ["14"]],
    ];

    return (
        <div className="sponsors-container" id="sponserLink">
            <div className="heading">Sponsors and Partners</div>
            {sponsorTypes.map((sponsorType) => {
                return (
                    <SponsorsSubContainer
                        key={sponsorType[0]}
                        subheading={sponsorType[0]}
                        links={sponsorType[1]}
                    />
                );
            })}
        </div>
    );
}

export default SponsorsContainer;
