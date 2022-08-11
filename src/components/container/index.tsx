import "./styles.css";

interface Container {
    children: JSX.Element;
}
export const Container = ({ children }: Container) => {
    return <div className="container">{children}</div>;
};
