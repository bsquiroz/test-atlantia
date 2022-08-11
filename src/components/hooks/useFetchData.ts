import { useEffect, useState } from "react";
import { BeerProduct, PresenceShare, PriceEvolution } from "../../interfaces";

export const useFetchData = () => {
    const [priceEvolution, setPriceEvolution] = useState<PriceEvolution[] | []>(
        []
    );
    const [presenceShare, setPresenceShare] = useState<PresenceShare[] | []>(
        []
    );
    const [beerProduct, setBeerProduct] = useState<BeerProduct[] | []>([]);

    const PriceEvolutionURI: string =
        "https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/";

    const presenceShareURI: string =
        "https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/";

    const beerProductsURI: string =
        "https://atlantia-dev-test.herokuapp.com/api/beer-products/";

    async function fecthData(url: string) {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const dataAtlantia = localStorage.getItem("dataAtlantia");

        if (dataAtlantia) {
            setPriceEvolution(JSON.parse(dataAtlantia)[0]);
            setPresenceShare(JSON.parse(dataAtlantia)[1]);
            setBeerProduct(JSON.parse(dataAtlantia)[2]);
        } else {
            Promise.all([
                fecthData(PriceEvolutionURI),
                fecthData(presenceShareURI),
                fecthData(beerProductsURI),
            ]).then((response) => {
                setPriceEvolution(response[0]);
                setPresenceShare(response[1]);
                setBeerProduct(response[2]);

                localStorage.setItem("dataAtlantia", JSON.stringify(response));
            });
        }
    }, []);

    return {
        priceEvolution,
        presenceShare,
        beerProduct,
    };
};
