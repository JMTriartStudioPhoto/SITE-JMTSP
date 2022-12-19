<?php
/* Template Name: Prestations */

get_header();

?>

<main>

    <section id="presta-img">
        <div id="presta-title">
            <h1 class="cursive_prestation"><?= the_title(); ?></h1>
        </div>
        <?php the_post_thumbnail(); ?>
    </section>

    <section id="prestation">
        <div class="container">
            <img class="Fleur_de_lys" src="http://<?php echo $_SERVER['SERVER_NAME'] ?>/wp-content/uploads/2022/12/Feur_de_lys.jpg">
            <div id="accroche">
                <h2><?= str_replace("ê", "e", get_the_title()); ?></h2>
                <span></span>
                <p><?= get_field('accroche'); ?></p>
            </div>
            <img class="Fleur_de_lys" src="http://<?php echo $_SERVER['SERVER_NAME'] ?>/wp-content/uploads/2022/12/Feur_de_lys.jpg">
        </div>
        
        <div id="content">
            <?php the_content(); ?>
        </div>


        <div class="ligne_2photos">
            <div><img class="photo_2col" src="<?= get_field('flexbox_img')['img_n°01']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°01']['alt'] ?>"></div>
            <div><img class="photo_2col" src="<?= get_field('flexbox_img')['img_n°02']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°02']['alt'] ?>"></div>
        </div>

        <div class="ligne_2photos">
            <div><img class="photo_2col" src="<?= get_field('flexbox_img')['img_n°03']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°03']['alt'] ?>"></div>
            <div><img class="photo_2col" src="<?= get_field('flexbox_img')['img_n°04']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°04']['alt'] ?>"></div>
        </div>

        <div class="ligne_3photos">
            <div><img class="photo_1col" src="<?= get_field('flexbox_img')['img_n°05']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°05']['alt'] ?>"></div>
            <div><img class="photo_1col" src="<?= get_field('flexbox_img')['img_n°06']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°06']['alt'] ?>"></div>
            <div><img class="photo_2col" src="<?= get_field('flexbox_img')['img_n°07']['url'] ?>" alt="<?= get_field('flexbox_img')['img_n°07']['alt'] ?>"></div>
        </div>
    </section>


</main>

<?php get_footer(); ?>