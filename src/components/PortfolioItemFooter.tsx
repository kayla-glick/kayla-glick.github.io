import React from "react";
import Badge from "react-bootstrap/Badge";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as LinkIcon } from "../assets/img/icons/link.svg";
import { Link } from "../types";

type PortfolioItemFooterProps = {
  links?: Link[]
  badges: string[]
}

function PortfolioItemFooter({links, badges}: PortfolioItemFooterProps) {
  return (
    <>
      {links && (
        <ul className="list-inline mb-1">
          {links?.map((link) => {
            return (
              <li className="list-inline-item me-4 mb-1" key={uuidv4()}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <LinkIcon fill="currentColor" className="me-1" width="16"/>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
      )}
      {badges && (
        <ul className="list-inline mb-0">
          {badges.map((badge) => {
            return (
              <li className="list-inline-item mb-1" key={uuidv4()}>
                <Badge pill bg=''>{badge}</Badge>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default PortfolioItemFooter