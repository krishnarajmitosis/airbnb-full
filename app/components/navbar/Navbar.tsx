import Container from "../Container";

const Navbar = () => {
    return (
        <div className="fixed bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div
                    className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md-gap-0
                    ">
Sammple menu
                        </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;