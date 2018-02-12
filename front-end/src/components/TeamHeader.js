import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

let TeamHeader = ({ teamName, projectName, navigate, deleteTeam, id }) => {
  return (
    <div className="team-header panel-heading">
        <Button className="add-team-member-btn" onClick={() => navigate(`add-team-member-${id}`)}>
          <FontAwesome name="user-plus" />
        </Button>
        <h2 className="col-xs-10 panel-title">{teamName} { projectName ? `/ ${projectName}`: "" }</h2>
        <FontAwesome name="edit" className="edit-team-btn" tabIndex="1" onClick={() => navigate(`edit-team-${id}`)} />
        <FontAwesome name="trash" className="delete-team-btn" tabIndex="1" onClick={() => deleteTeam(id)} />
    </div>
  );
};

TeamHeader = connect()(TeamHeader);

TeamHeader.propTypes = {
  teamName: PropTypes.string,
  navigate: PropTypes.func,
  projectName: PropTypes.string,
  dispatch: PropTypes.func,
  id: PropTypes.string
};

export default TeamHeader;