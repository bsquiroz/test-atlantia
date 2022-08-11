import { FC } from "react";
import { PresenceShare, PriceEvolution } from "../../interfaces";
import { DiagramPresenceSha } from "../diagramPresenceSha";
import { DiagramPriceEvol } from "../diagramPriceEvol";

import "./styles.css";

interface Props {
    presenceShare: PresenceShare[];
    priceEvolution: PriceEvolution[];
}

export const Dashboard: FC<Props> = ({ presenceShare, priceEvolution }) => {
    return (
        <div>
            <h1 className="title titlePrincipal color_blue_dark">
                General Perfomance Analysis
            </h1>

            <div className="container_diagram">
                {priceEvolution.length && (
                    <DiagramPriceEvol priceEvolution={priceEvolution} />
                )}

                {presenceShare.length && (
                    <DiagramPresenceSha presenceShare={presenceShare} />
                )}
            </div>
        </div>
    );
};
