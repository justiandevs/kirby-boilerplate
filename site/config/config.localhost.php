<?php

use arnoson\KirbyVite\Vite;

return [
  'debug' => true,
  'amteich.twig.env.functions' => [
    'vjs' => function () {
      $vite = new Vite();
      return new Twig\Markup($vite->js(), 'UTF_8');
    },
    'vcss' => function () {
      $vite = new Vite();
      return new Twig\Markup($vite->css(), 'UTF_8');
    }
  ]
];
