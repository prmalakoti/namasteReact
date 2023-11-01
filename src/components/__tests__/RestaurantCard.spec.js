import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLable } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resdata={MOCK_DATA} />);
    let name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
})

// it("Should render RestaurantCard component with Promoted Label", () => {
//     render(
//         <withPromotedLable>
//             <RestaurantCard resdata={MOCK_DATA} />
//         </withPromotedLable>
//     );
// })