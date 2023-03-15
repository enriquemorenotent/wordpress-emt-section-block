<?php $align = $attributes['align'] ?? 'none'; ?>
<?php $padding = $attributes['padding'] ?? '0'; ?>
<?php $backgroundImage = $attributes['backgroundImage'] ?? null; ?>
<?php $backgroundPosition =
    $attributes['backgroundPosition'] ?? 'center center'; ?>
<?php $backgroundSize = $attributes['backgroundSize'] ?? 'cover'; ?>
<?php $backgroundCSS = $backgroundImage
    ? "background-image: url({$backgroundImage}); background-position: {$backgroundPosition}; background-size: {$backgroundSize};"
    : ''; ?>

<?php $wrapper_attributes = get_block_wrapper_attributes([
    'class' => "align{$align}",
    'style' => "padding: {$padding}0px 0; {$backgroundCSS}",
]); ?>

<div <?= $wrapper_attributes ?>>
    <?= $content ?>
</div>