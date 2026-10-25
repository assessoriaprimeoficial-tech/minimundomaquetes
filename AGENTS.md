<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Store page media as Lovable Assets JSON pointers; keep only the small favicon in public so browser icon requests work directly.
- Put share-image metadata on the leaf route using an absolute production URL and a share-sized rendition of the visible brand image so link previews stay consistent.
- Measure marquee track widths with ResizeObserver and derive duration from a shared pixels-per-second rate so different image counts retain equal scrolling speed.
- The gallery photo list is generated at build time from the real files in public/galeria (vite.config.ts define __GALLERY_PHOTOS__); never hardcode a numbered range, because the files have gaps.
- Maquette carousel source photos live under public/maquetes/<nivel>; Grande and the four newest Comum photos use Lovable Assets pointers for deployment-safe URLs. Preserve the ordering with the most common dimensions first.
