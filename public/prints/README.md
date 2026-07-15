# Prints do sistema (celulares 3D)

Solte aqui as capturas de tela do sistema. Os celulares 3D da landing procuram
os arquivos por estes nomes exatos — assim que o arquivo existir, o placeholder
some e a print aparece (não precisa mexer no código).

| Arquivo | Onde aparece |
| --- | --- |
| `agenda.png` | Seção "Veja por dentro" — 1º celular |
| `sinal.png` | Seção "Veja por dentro" — 2º celular |
| `faturamento.png` | Seção "Veja por dentro" — 3º celular |
| `passo-agendar.png` | Como funciona — passo 1 |
| `passo-sinal.png` | Como funciona — passo 2 |
| `passo-confirmado.png` | Como funciona — passo 3 |
| `painel.png` | Recursos — celular de destaque |

**Formato ideal:** print vertical do celular, proporção **~9:19.5**
(ex.: 1170×2532 ou 1080×2340). PNG, JPG ou WebP **otimizado** (evite arquivos
gigantes — comprima antes).

Os nomes/caminhos ficam centralizados em [`lib/prints.ts`](../../lib/prints.ts),
caso queira renomear ou adicionar telas.

> A **foto de fundo do hero** é outra coisa: fica em `public/hero-bg.jpg`
> (foto de pessoas, não print de celular).
