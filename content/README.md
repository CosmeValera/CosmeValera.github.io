# 🔧 Zola Blog Scheduling
This system allows you to schedule blog posts in Zola, automatically displaying today's date for posts scheduled in the future. You can also use 
`draft=true` to test posts without publishing them.

## 📅 Use Cases
1. **Past or Today's Date:** If you set a post's date to today or in the past, it will be published with that date.
2. **Future Date:** If you set a post's date to the future, it will show today's date until the scheduled date arrives, changing daily until it's the release date.
3. **Testing Posts:** Use `draft=true` to hide posts under development from the live site while you test or refine them.

## 📝 Practical Examples
1. **Past or Today's Date:** 
    - **File Name:** `2024-11-24-past-post.md`
    - **Current Date:** `2024-11-24`
    - **Result:** It will be published with that date
2. **Future Date:** 
    - **File Name:** `2030-12-30-scheduled-post.md`
    - **Current Date:** `2024-11-24`
    - **Result:** The post will initially show today's date (`2024-11-24`) until it reaches the scheduled release date of `2030-12-30`.
3. **Testing Posts:** Use `draft=true` to hide posts under development from the live site while you test or refine them.

    ```sh
    +++
    title = "Draft Post"
    template = "blog-post.html"
    description = "A post not ready for publishing."
    draft = true
    +++
    ```

## 💻 Code for Date Handling in `blog-post.html`
```jinja
{% set post_date_numeric = post.date | date(format="%Y%m%d") | int %}
{% set now_numeric = now() | date(format="%Y%m%d") | int %}

{% if post_date_numeric > now_numeric %}
  {% set post_date_display = now() | date(format="%B %d, %Y") %}
{% else %}
  {% set post_date_display = post.date | date(format="%B %d, %Y") %}
{% endif %}
```
This code snippet checks if the post's date is in the future compared to the current date. If it is, the date will be set to the current date; otherwise, it will remain the post's original date.