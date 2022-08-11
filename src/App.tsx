import { Container } from "./components/container";
import { Dashboard } from "./components/dashboard";
import { useFetchData } from "./components/hooks/useFetchData";
import { Navbar } from "./components/navbar";
import { Repo } from "./components/repo";
import { Table } from "./components/table";

export const App = () => {
    const { beerProduct, presenceShare, priceEvolution } = useFetchData();

    return (
        <>
            <Navbar />
            <Container>
                <>
                    <Dashboard
                        presenceShare={presenceShare}
                        priceEvolution={priceEvolution}
                    />
                    <Table beerProduct={beerProduct} />
                    <Repo />
                </>
            </Container>
        </>
    );
};
