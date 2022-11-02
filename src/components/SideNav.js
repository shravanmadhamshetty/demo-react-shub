import ListGroup from "react-bootstrap/ListGroup";
import "./SideNav.css";

const SideNav = () => {
  return (
    <>
      <div className="side-nav">
        <ListGroup defaultActiveKey="#link1" variant="flush">
          <ListGroup.Item action href="#link1" className="border-radius-none">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
            Link 3
          </ListGroup.Item>
          <ListGroup.Item action href="#link4">
            Link 4
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default SideNav;
