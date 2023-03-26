# Memo
## What I keep in mind when designing
When I design websites and graphics, there are a few things I try to keep in mind ~~at times I don't follow my own guidelines~~.

- Balancing Consistency
- Functional & Scalable
- Meaningful
- Responsive

Additionally, I also found the [Web Interface Guidelines](https://rauno.me/interfaces) written by [Rauno Freiberg](https://rauno.me) to be very helpful.

### Balancing consistency
Consistency is a necessary element to ensure that users can easily navigate the site. When crafting user interfaces you are not only creating a visual like you do in a logo or poster design, but you must also consider its functional aspects. Too much consistancy however, can make everything look similar and conversely difficult to use. While a strong brand identity is important, its most impotant to be able to identify what requires consistancy and what doesn't.

### Functional & scalable
It is difficult to find the balance between "What you want to create" and "What you able to create", especially when developing web services and designing the frontend. ("What you want to create" is what the mockup looks like on Figma, and "What you can create" is the actual mockup that has been crafted through code).
Its easy to craft something in Figma that looks visually appealing however, when its time to transfer that into code, I often find that the mockup previously designed is not realistic / optimal because it completely disregards whether you can isolate it as a component or performance degradation, etc. In return you get a final product that is often far from what is ideal.

In short, I believe that the balance between "ideal" and "execution" is particularly important.
The following are a few reallife examples that I have faced when crafting UI.

| Ideal | Reality |
| ------- | ------- |
| Adding texture to surfaces | Degrading performance |
| Adopting a unique design | Difficult to make into a component and scale vertically |

...etc. There are many things we want to create, but it is difficult to find a balance between what is realistically feasible and what is not.

Therefore, I find it very important to keep this kind of realism in mind to some extent when designing. (Recently I just skip the Figma mockup all together and directly transfer what I have in my head into code.) Not to mention there are also discovers you can make while you are programming the interface. When working with a css `@keyframes` you may encounter an error that happened to look unique and better than what you were imagining in your head. With that, I think there are a multitude of benefits that do come from skipping the mockup process.

### Meaningful
I don't believe that something that just looks beautiful is meaningless. I want to design with an eye to what kind of ingenuity can be achieved to capture beauty (I feel a kind of self-satisfaction through this).

### Responsive
I believe that responsive design is essential so that the interface is accesible in any aspect ratio. I also think it is important to use responsive design when crafting logos, as it lets the logo adapt to any situation (profile photos, banner images, etc...)