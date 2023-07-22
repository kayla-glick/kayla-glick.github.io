import { createRef, useState } from "react";
import Image from "react-bootstrap/Image";
import { v4 as uuidv4 } from "uuid";
import PortfolioItemFooter from "../../PortfolioItemFooter";
import { ReactComponent as DotIcon } from "../../../assets/img/icons/dot-circle.svg";

type Props = {
  role: Role
}

function Item({role}: Props) {
  const [isHover, setIsHover] = useState(false);
  const linkRef = createRef<HTMLAnchorElement>();

  function handleClick(event: any) {
    if (event.target.tagName === 'A') return;
    linkRef.current!.click();
  }

  function handleHover(event: any, newIsHover: boolean) {
    // Handle hovering over other links inside the item
    if (event.target.tagName === 'A' && event.target != linkRef.current) {
      event.preventDefault()
      setIsHover(false)
      linkRef.current!.blur();
      event.target.focus();
      return
    }
    if (isHover === newIsHover) return;

    if (newIsHover) {
      document.body.style.cursor = 'pointer';
      linkRef.current!.focus();
    } else {
      document.body.style.cursor = 'unset';
      linkRef.current!.blur();
    }

    setIsHover(newIsHover);
  }

  return (
    <div className="timeline-row">
      <button
        className={`timeline-indicator btn ${isHover ? "active" : ""}`}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
        onClick={(e) => handleClick(e)}
      >
        <DotIcon fill="currentcolor" />
        <p className="mb-0">{role.dates}</p>
      </button>
      <div className="timeline-section">
        <div
          className={`timeline-section-contents ${isHover ? "active" : ""}`}
          onMouseOver={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={(e) => handleClick(e)}
        >
          <Image src={role.logo} alt={`${role.company} Logo`} width="48" height="48" className="me-2" />
          <div className="d-flex flex-column">
            <h2 className="timeline-company">
            <a href={role.link} target="_blank" rel="noreferrer" ref={linkRef}>
              {role.company}
            </a>
            </h2>
            <div className="timeline-roles">
              <h3 className="timeline-role">{role.name}</h3>
              {role.previousRoles?.map((name) => {
                return <p className="timeline-role" key={uuidv4()}>{name}</p>
              })}
            </div>
            <p className="timeline-description" dangerouslySetInnerHTML={{__html: role.description}} />
            <PortfolioItemFooter links={role.projects} badges={role.skills} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;