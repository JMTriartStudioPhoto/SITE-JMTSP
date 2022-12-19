<?php 
    /* Template Name: Page d'accueil */

    get_header();
?>




    <main>
        
            <div>
                <?php the_post_thumbnail(); ?>
            </div>
            <div class="fondAvisTexte">
                <b class="avisTexte">
                    <?= get_field('introduction')?>
                </b>
            </div>               
        

        
            <section class="paragraphe_C">
                    <div>
                        <?php the_content(); ?>
                    </div>

                    <img class="photoBas" src="<?= get_field('flexbox_img')['img_01']['url']?>" alt="<?= get_field('flexbox_img')['img_01']['alt']?>">
                    <img class="photoBas" src="<?= get_field('flexbox_img')['img_02']['url']?>" alt="<?= get_field('flexbox_img')['img_02']['alt']?>">
                    <img class="photoBas" src="<?= get_field('flexbox_img')['img_03']['url']?>" alt="<?= get_field('flexbox_img')['img_03']['alt']?>">
                    <img class="photoBas" src="<?= get_field('flexbox_img')['img_04']['url']?>" alt="<?= get_field('flexbox_img')['img_04']['alt']?>">
                  
            </section>   
        




    </main>

    <?php get_footer(); ?>