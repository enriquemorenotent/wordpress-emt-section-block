import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { RangeControl } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const { padding, backgroundImage, backgroundPosition, backgroundSize } =
		attributes;

	const blockProps = useBlockProps({
		style: {
			padding: `${padding * 10}px 0`,
			backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : null,
			backgroundPosition: backgroundPosition,
			backgroundSize: backgroundSize,
		},
	});

	console.log("bgimage", backgroundImage);

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Padding", "emt-section-block")}>
					<RangeControl
						label={__("Padding", "emt-section-block")}
						value={padding}
						onChange={(padding) => setAttributes({ padding })}
						min={0}
						max={10}
					/>
				</PanelBody>
				<PanelBody title={__("Background Image", "emt-section-block")}>
					<MediaUpload
						onSelect={(image) => setAttributes({ backgroundImage: image })}
						allowedTypes={["image"]}
						value={backgroundImage}
						render={({ open }) => (
							<Button onClick={open} icon="format-image" showTooltip="true">
								{__("Select Image", "emt-section-block")}
							</Button>
						)}
					/>
					{backgroundImage && (
						<Button
							onClick={() => setAttributes({ backgroundImage: null })}
							icon="no"
							showTooltip="true"
						>
							{__("Remove Image", "emt-section-block")}
						</Button>
					)}
				</PanelBody>

				{/* Control to manage the background image position with a dropdown */}

				{backgroundImage && (
					<>
						<PanelBody title={__("Background Position", "emt-section-block")}>
							<select
								value={backgroundPosition}
								onChange={(event) =>
									setAttributes({ backgroundPosition: event.target.value })
								}
							>
								<option value="left top">Left Top</option>
								<option value="left center">Left Center</option>
								<option value="left bottom">Left Bottom</option>
								<option value="center top">Center Top</option>
								<option value="center center">Center Center</option>
								<option value="center bottom">Center Bottom</option>
								<option value="right top">Right Top</option>
								<option value="right center">Right Center</option>
								<option value="right bottom">Right Bottom</option>
							</select>
						</PanelBody>
						<PanelBody title={__("Background Size", "emt-section-block")}>
							<select
								value={backgroundSize}
								onChange={(event) =>
									setAttributes({ backgroundSize: event.target.value })
								}
							>
								<option value="auto">Auto</option>
								<option value="cover">Cover</option>
								<option value="contain">Contain</option>
							</select>
						</PanelBody>
					</>
				)}
			</InspectorControls>

			<InnerBlocks
				// allowedBlocks={["core/paragraph"]}
				template={[["core/paragraph", { placeholder: "Write your text here" }]]}
			/>
		</div>
	);
};

export default Edit;
