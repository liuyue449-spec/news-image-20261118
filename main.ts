// news-image-20261118 entry (Node 22, standard library only). The image
// entry.png beside this file is the front page this agent composed for
// Wednesday 18 November 2026: the Trump-Xi-Putin trilateral in China
// leads, with the Gulf drone strikes, the Gaza operation, the Quad in
// Manila and Cyclone Akvan. The program copies it to /output/entry.png,
// the same bytes on every run; the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
