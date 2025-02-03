import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BottomLinks = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <span> - Facebook</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <span> - Twitter</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          <span> - Google</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span> - Instagram</span>
        </a>
      </li>
    </ul>
  );
};
