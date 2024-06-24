import Accordion from "../inc/Accordion/Accordion";
import Alerts from "../inc/Alerts/Alerts";
import Carousel from "../inc/Carousel/Carousel";
import Notifications from "../inc/Notifications/Notifications";

function Home() {
  return (
    <div className="container">
      <div className="container card shadow p-5 my-5 mb-5">
        <h1 className="my-5 mb-5 alert alert-primary">Home - Carousel</h1>
        <Carousel />
      </div>
      <div className="container card shadow p-5 my-5 mb-5">
        <h1 className="my-5 mb-5 alert alert-danger">Home - Accordion</h1>
        <Accordion />
      </div>
      <div className="container mt-5 mb-5 shadow card p-5">
        <h1 className="alert alert-warning">Alertas</h1>
        <Alerts />
      </div>
      <div className="container mt-5 mb-5 shadow card p-5">
        <h1 className="alert alert-light">Notifications</h1>
        <Notifications />
      </div>
    </div>
  );
}

export default Home;
