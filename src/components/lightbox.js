import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`
const PreviewButton = styled.button`
  border: none;
  padding: 0;
  margin: 5px;
  maxHeight: 200px;
  overflow: hidden;
`
export default class Lightbox extends Component {
  static propTypes = {
    gallImages: PropTypes.array.isRequired, // eslint-disable-line
  }
  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }
  render() {
    const { gallImages } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <LightboxContainer>
          {gallImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.tabImage.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Img fluid={image.node.childImageSharp.tabImage} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog>
            <Img fluid={selectedImage.node.childImageSharp.fullImage} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
