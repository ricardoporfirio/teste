const chalk = require('chalk');

module.exports = (program, manifest, t) => {
  program
    .command('coin')
    .description(t('desc'))
    .action(() => {
      // Lógica simples: 50/50
      const isHeads = Math.random() > 0.5;
      
      const resultText = isHeads ? t('heads') : t('tails');
      const color = isHeads ? 'yellow' : 'cyan'; // Amarelo para Cara, Ciano para Coroa

      console.log('');
      console.log(chalk.gray(t('flipping')));
      
      // Um pequeno delay "fake" para dar emoção (opcional)
      setTimeout(() => {
        console.log(chalk[color].bold(`\n🪙  ${resultText}!\n`));
      }, 500);
    });
};