export class DetailsService {//a service data to be used in components for product details
    details = [
        {   id: 1,
            description: `A CASUAL TEE FOR EVERYDAY COMFORT.
            For days on the move or nights on the town, 
            this t-shirt lets everyone know whose team you play for. 
            It's made of soft cotton jersey for all-day comfort. 
            A bold contrast adidas Badge of Sport stands out on the chest.`,
            details: `Regular fit strikes a comfortable balance between loose and snug.
            Ribbed crewneck.
            Short sleeves.
            100% cotton single jersey.
            Soft feel`,
            care:`Do not bleach.
            Tumble dry low heat.
            Do not dry clean.
            Touch up with warm iron.
            Machine wash cold`
        },
        {   id: 2,
            description:`Freshen up your basics with this t-shirt. 
            Show your love for all things sport with a big adidas Badge of Sport 
            that's front and center. Good thing it's designed for everyday wear, 
            because if you're anything like us, you're going to want to reach for it all the time.`,
            details:`Regular fit. 
            Crewneck.
            100% cotton single jersey. 
            Short sleeves`,
            care:`Do not bleach.
            Do not tumble dry. 
            Do not dry clean. 
            Touch up with cool iron. 
            Machine wash warm`,
        },
        {   id: 3,
            description:`Put your brand pride on full display. A simple yet versatile look, 
            this long sleeve t-shirt keeps you comfortable while on the move or lounging at home. 
            A contrast adidas Badge of Sport stands out on the chest.`,
            details:`Regular fit strikes a comfortable balance between loose and snug. 
            Ribbed crewneck. 
            Long sleeves with ribbed cuffs. 
            100% cotton single jersey. 
            Soft feel`,
            care:`Do not bleach. 
            Tumble dry low heat. 
            Do not dry clean. 
            Touch up with cool iron. 
            Machine wash cold`,
        },
        {   id: 4,
            description:`The Nike Air T-Shirt is made with our everyday cotton and classic fit 
            for a smooth, familiar feel. The printed graphic combines the Air Futura logo with a 
            top-down landscape view like the one you'd see from an airplane.`,
            details:`The classic fit tee silhouette is relaxed through the body and hips. 
            Everyday cotton fabric feels soft and lightweight. 
            Standard fit for a relaxed, easy feel. 
            100% cotton`,
            care:`Machine wash`,
        },
        {   id: 5,
            description:`This 100% cotton tee is cool and comfy, on and off the court. 
            An easy fit and Jordan graphics on both sides will have you reaching for it on the daily`,
            details:`Jordan Standard fit. 
            Graphics on front and back. 
            100% cotton`,
            care:`Machine wash cold`,
        },
        {   id: 6,
            description:`When it comes to your morning routine, it's hard to top a cool morning run 
            after a warm cup of coffee. Followed by another coffee. This long-sleeve tee celebrates 
            the iconic dawn-time pairing with soft cotton in a relaxed fit for easy comfort, 
            so you can enjoy it wherever the rest of your day takes you.`,
            details:`Ribbed cuffs and collar. 
            100% cotton`,
            care:`Machine wash`,
        },
        {   id: 7,
            description:`Pair this crewneck sweatshirt with anything in your closet for a timeless 
            look that'll never go out of style. The bold adidas Badge of Sport puts your love for 
            adidas heritage at center stage. The cozy fleece keeps you warm whether you're chilling 
            on the couch or hanging out between pickup games.`,
            details:`Regular fit. 
            Crewneck. 
            53% cotton, 36% recycled polyester, 11% viscose fleece. 
            Ribbed cuffs and hem`,
            care:`Do not bleach. 
            Do not tumble dry. 
            Do not dry clean. 
            Touch up with cool iron. 
            Machine wash warm`,
        },
        {   id: 8,
            description:`The outdoors are never far when you have this adidas hoodie on. 
            That is, the camo print on the adidas Badge of Sport keeps the nature vibes close, 
            even if you're tucked inside for some necessary reset time. Though when you're feeling 
            inspired, the soft cozy fleece material keeps you incredibly comfortable when you choose 
            to venture out the door. Plus the loose fit makes it super easy to layer.`,
            details:`Loose fit. 
            Drawcord-adjustable hood. 
            70% cotton, 30% recycled polyester fleece. 
            Kangaroo pocket. 
            Ribbed cuffs and hem`,
            care:`Do not bleach. 
            Do not tumble dry. 
            Do not dry clean. 
            Touch up with warm iron. 
            Machine wash warm`,
        },
        {   id: 9,
            description:`Extend your range on the course in this adidas golf fleece pullover. 
            When the day starts off cold or the afternoon clouds move in, it offers easy-moving 
            warmth that lets you focus on your swing. It's coated with a durable water-repellent 
            finish to keep you dry through misty mornings and an occasional light shower. 
            The relaxed feel plays well off the course too.`,
            details:`Regular fit.
            Quarter zip with stand-up collar. 
            Upper body: 100% recycled polyester doubleknit. 
            Lower body: 100% recycled polyester fleece. 
            Banded hem`,
            care:`Do not bleach. 
            Tumble dry low heat. 
            Do not dry clean. 
            Do not iron. 
            Machine wash cold`,
        },
        {
            id: 10,
            description:`A closet staple, the Nike Sportswear Club Fleece Crew combines a bold 
            Futura logo on the chest with the soft comfort of fleece for an elevated, everyday look.`,
            details:`Fleece fabric is soft and smooth against the skin. 
            Ribbing at the hem, cuffs and collar keep your fit comfy and secure. 
            Standard fit for a relaxed, easy feel. 
            80% cotton/20% polyester`,
            care:`Machine wash`,
        },
        {
            id: 11,
            description:`The Nike Dri-FIT Hoodie is made of soft French terry fabric with 
            sweat-wicking power to help keep you warm and dry when you're warming up, 
            cooling down or catching your breath between sets. This product is made with 100% 
            sustainable materials, using a blend of both recycled polyester and organic cotton fibers. 
            The blend is at least 10% recycled fibers or at least 10% organic cotton fibers.`,
            details:`Dri-FIT technology helps you stay dry and comfortable. 
            French terry fabric feels soft and warm. 
            Standard fit for a relaxed, easy feel. 
            Full zip. 
            Front pockets. 
            61% cotton/39% polyester`,
            care:`Machine wash`,
        },
        {
            id: 12,
            description:`This track-inspired Solo Swoosh jacket is built on clean lines with 
            soft blended fabric in a roomy fit you can layer up or down. The 1/4-zip design 
            lets you change up your style and coverage while soft ribbing in the hem and cuffs 
            help lock in your body heat. The smooth, brushed French terry fabric feels soft and 
            warm against your skin for comfort you can take anywhere.`,
            details:`
            The 1/4-zip closure and stand collar lets you layer it over a tee for casual comfort,
            or pop it on over an oxford shirt for a more dressed up finish. 
            Loose fit for a roomy feel. 
            Embroidered Swoosh design on left chest. 
            Body: 84-85% cotton/15-16% polyester. 
            Rib: 98% cotton/2% spandex. 
            Material percentages may vary, check label for actual content`,
            care:`Machine wash`,
        },
        {
            id: 13,
            description:`From a morning gym session to a day of errands to an evening with friends, 
            keep your feet comfortable and your style on point in these adidas shoes. 
            Pair them with your favorite running shorts for the ultimate athletic-casual vibe. 
            A mesh upper helps you stay cool, while superlight cushioning cradles every step you take. 
            Made with a series of recycled materials, this upper features at least 50% recycled content. 
            This product represents just one of our solutions to help end plastic waste.`,
            details:`Regular fit. 
            Lace closure. 
            Sandwich mesh upper. 
            Supportive no-sew overlays. 
            Soft heel. 
            LIGHTMOTION cushioning`,
            care:``,
        },
        {
            id: 14,
            description:`It doesn't really matter whether or not a run is in the cards for the day. 
            An ultra-breathable feel and cushy midsole that energizes give these adidas shoes an edge. 
            Hit the pavement or hit the town. You've got the kicks for whatever unfolds.`,
            details:`Lace closure. 
            Knit textile upper. 
            Breathable feel. 
            Textile lining. 
            Bounce midsole`,
            care:``,
        },
        {
            id: 15,
            description:`When you're getting close to race day, you need pace and pop. 
            These adidas running shoes are designed for that fast performance. They combine 
            Bounce technology at the heel and Bounce+ underfoot for all-around cushioning to 
            make your run feel springy. The specially made plastic heel clip provides added stability. 
            Now all you need to do is tighten up your laces and start the clock. Made with a series of 
            recycled materials, this upper features at least 50% recycled content. 
            This product represents just one of our solutions to help end plastic waste.`,
            details:`Regular fit. 
            Lace closure. 
            Breathable mesh upper. 
            Geofit padded collar. 
            Bounce midsole. 
            Adibouncy EVA sockliner`,
            care:``,
        },{
            id: 16,
            description:`Every day is an opportunity to improve: your expectations, your outlook, 
            your run. The Ultra 4D is coded to help get you there, starting with a 3D-printed 4D 
            midsole designed to stabilize your ride. Long-lasting cushioning helps you go the distance, 
            and adidas PRIMEKNIT wraps your foot for support through every stride.`,
            details:`Lace closure. 
            adidas PRIMEKNIT upper. 
            3D-printed 4D midsole. 
            Textile lining. 
            Continental™ Rubber outsole`,
            care:``,
        },
        {
            id: 17,
            description:`The Jordan offers a fresh, fearless take on the features you want: durability, 
            comfort, and an attitude that's Jordan to the core. We updated design lines and upgraded 
            some components, while keeping the fundamentals you love from the first Delta in place. 
            Enjoy the same combination of supportive, innovative materials, with new textures and 
            heavy stitching to create a look that's both adventurous and iconic.`,
            details:`React foam is ultra-soft, resilient, and transitions smoothly from heel to toe. 
            Multilayered, mixed material fabric looks both high-tech and handcrafted. 
            Rubber outsole pods provide traction where your foot hits the ground. 
            Molded rubber mudguard along the outer midfoot provides side-to-side stability. 
            Woven tongue label with micro graphics. 
            Heel pull loop`,
            care:``,
        },
        {
            id: 18,
            description:`A Zoom Air unit in the forefoot offers responsive cushioning. 
            Every step helps create energy return to help drive you forward. 
            It combines with a foam midsole for a firm, yet smooth and stable feeling as 
            your foot hits the ground.`,
            details:`The durable rubber sole is built for mileage. 
            Grooves in the forefoot to create flexibility, and vertical 
            grooves down the side help create stability. 
            Mesh is engineered for durability. 
            Laces cinch down for a secure feel. 
            A softer and more durable lining around the heel and ankle helps keep 
            socks from bunching up when you run. 
            Cushy tongue provides helps pad the laces. 
            Molded heel securely hugs your foot. 
            Weight: 312g/11oz (Men's size 10). 
            Offset: 8mm (Forefoot: 19mm, Heel: 27mm)`,
            care:``,
        },
        {
            id: 19,
            description:`LeBron thrives when stakes are high and the pressure's on. 
            The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. 
            The snug inner sleeve is pulled together by a sculpted overlay that the laces feed 
            through to help prevent the foot from moving inside the shoe. 
            Embedded pods in the tongue and around the collar help reduce weight, 
            keep the ankle aligned, and give players the secure feel and confidence to 
            go all out when the game is on the line.`,
            details:`The retooled cushioning system combines visible Max Air with a thick,
            responsive Zoom Air unit under the forefoot. 
            The Max Air helps to dissipate impact forces, 
            while the Zoom Air helps drive you down the court. 
            The bottom of the shoe is designed to 
            look like valves and tubes that form its inner workings. 
            A full inner fit sleeve conforms to the foot for a snug, secure feel. 
            The thin, transparent exterior layer is highly durable and lightweight 
            to keep you contained and help reduce in-shoe movement.
            Cushlon foam midsole is soft, stable and responsive.
            Flywire cables rise up from the midsole to help harness your foot when you lace up.
            LeBron's logo is visible through the bottom of the shoe`,
            care:``,
        },
        {
            id: 20,
            description:`Nike ZoomX foam is responsive and lightweight, giving you bounce with every step. 
            Shaped like a rocker, the foam provides support for the 3 phases of a runner's stride. 
            It offers flexibility when your foot rises off the ground, a smooth ride when your foot is 
            moving forward and cushioning at ground contact.`,
            details:`Flyknit technology uses high-strength fibers to create a lightweight upper with 
            targeted areas of support, stretch and breathability. 
            It provides security and comfort.
            Waffle-inspired tread on the outsole provides traction`,
            care:``,
        },
        {
            id: 21,
            description:`Fresh colors and graphics nod to the days of the Nike Athletic Department and 
            Nike International. It's a meeting of eras, showing where we've been while keeping an eye 
            towards tomorrow. We added Flyknit throughout the upper, creating specific zones of 
            breathability, flexibility and containment. The result is a cool feel that helps your 
            foot feel secure, while letting it move with reduced restrictions. It still has 
            Flywire technology for support through the midfoot.`,
            details:`High-rise cushioning comes with less material between it and your foot, 
            so you're closer to the foam for a truly responsive experience.
            Hybrid tongue combines a socklike feel with the adjustability of a traditional design.
            Soft padding along the collar provides a cushioned touch point.
            Increased rubber at the outsole helps deliver traction and durability`,
            care:``,
        },
        {
            id: 22,
            description:`EVERYDAY TEE WITH AN ULTRA-SPORTY LOOK.
            The classic design on this t-shirt makes it super easy to mix and match. 
            Go sporty with a pair of track pants, or throw it on with jeans for a day out shopping. 
            An oversized adidas Badge of Sport across the chest makes it clear you're a sports lover.`,
            details:`Regular fit.
            Crewneck.
            100% cotton single jersey.
            Short sleeves`,
            care:`Do not bleach.
            Do not tumble dry.
            Do not dry clean.
            Touch up with warm iron.
            Machine wash warm`,
        },
        {
            id: 23,
            description:`Flowers urge us to stop and pause. This soft t-shirt is ideal for slowing down. 
            The floral details at the adidas Badge of Sport add a feminine feel to the athletic, 
            crewneck shape. So whether your idea of me-time is a hike in the woods or a cup of tea 
            in the garden, this tee is the natural choice. 
            Our cotton products support more sustainable cotton farming.`,
            details:`Regular fit.
            Crewneck.
            100% cotton single jersey.
            Soft feel`,
            care:`Do not bleach.
            Tumble dry low heat.
            Do not dry clean.
            Touch up with warm iron.
            Machine wash warm`,
        },{
            id: 24,
            description:`Beat your personal best. Up the weight on your leg presses. 
            You've got a lot of goals. But when rest day comfort is your goal, 
            reach for this sporty adidas long sleeve t-shirt. Throw it on to go out with 
            friends or catch up on your favorite shows. No matter how you choose to rest 
            up and rejuvenate, the soft single jersey fabric will keep things cozy.
            Our cotton products support more sustainable cotton farming.`,
            details:`Regular fit.
            Ribbed crewneck.
            100% cotton single jersey.
            Supports the Better Cotton Initiative`,
            care:`Do not bleach.
            Tumble dry low heat.
            Do not dry clean.
            Touch up with cool iron.
            Machine wash warm`,
        },
        {
            id: 25,
            description:`The Nike Sportswear Essential T-Shirt sets you up with soft cotton jersey and a cropped hem.`,
            details:`Cotton fabric is soft and comfortable.
            Cropped hem hits above the hips.
            Loose fit for a roomy feel.
            Fabric: 100% cotton`,
            care:`Machine wash`,
        },
        {
            id: 26,
            description:`"Just Do It." is knit into the interior hem to deliver an inspirational 
            message—just for you. Soft, smooth fabric with 4-way stretch helps you move without 
            restrictions. It's designed to hit low on your hips for more coverage while you bend 
            and stretch.`,
            details:`Slim fit for a tailored feel.
            Reflective details.
            Not intended for use as Personal Protective Equipment (PPE).
            85% nylon/11% polyester/4% spandex`,
            care:`Machine wash`,
        },
        {
            id: 27,
            description:`Perfect as a base layer or worn on its own, the Nike Sportswear 
            Long-Sleeve T-Shirt sets you up with soft cotton jersey and a Nike logo printed on the chest.`,
            details:`100% cotton`,
            care:`Machine wash`,
        },
        {
            id: 28,
            description:`Don't underestimate the power of a good sweatshirt. This one gives you plenty 
            of styling options, wraps you in comfort, and reflects your inner confidence with an 
            adidas Badge of Sport logo on the front. Pull it on. Feel good.
            Our cotton products support more sustainable cotton farming.`,
            details:`Loose fit.
            Ribbed crewneck.
            53% cotton, 36% recycled polyester, 11% viscose French terry.
            Ribbed cuffs and hem`,
            care:`Do not bleach.
            Do not tumble dry.
            Do not dry clean.
            Touch up with warm iron.
            Machine wash warm`,
        },
        {
            id: 29,
            description:`The nice thing about a hoodie is being able to mix and match it with everything. 
            This one from adidas is cut from a soft fleece fabric that's cozy enough to wear every day. 
            Pair it with jeans, or keep it mellow and match it with sweats. You can't go wrong.
            Our cotton products support sustainable cotton farming. This is part of our ambition to end plastic waste.`,
            details:`Regular fit.
            Drawcord-adjustable hood.
            53% cotton, 36% recycled polyester, 11% viscose fleece.
            Soft feel`,
            care:`Do not bleach.
            Do not tumble dry.
            Do not dry clean.
            Touch up with cool iron.
            Machine wash warm`,
        },
        {
            id: 30,
            description:`Look good and stay warm at the same time. This Terrex half-zip sweatshirt 
            features recycled fabrics. The cropped silhouette pairs as easily with leggings as with 
            hiking pants. The non-brushed design is inspired by adidas' ambition to address the 
            microfiber shedding problem.
            This product is made with Primegreen, a series of high-performance recycled materials.`,
            details:`Half zip with stand-up collar.
            100% recycled polyester doubleknit.
            Woven overlay.
            Front pocket with zip.
            Cropped hem.
            Gathered fabric at front hem`,
            care:`Do not bleach.
            Do not tumble dry.
            Do not dry clean.
            Do not iron.
            Machine wash cold`,
        },
        {
            id: 31,
            description:`Club Fleece sweatshirts, universally loved for their coziness and consistency, 
            are for everyone. Always soft and made with a relaxed fit, they're basics that help you 
            do more. This cozy crew neck is a cold-weather staple, with just enough room to layer 
            comfortably without feeling too big.`,
            details:`Brushed for added warmth and softness, it's an ideal layer for colder temperatures.
            Ribbing at the hem and cuffs is soft and stretchy for easy layering.
            80% cotton/20% polyester`,
            care:`Machine wash`,
        },
        {
            id: 32,
            description:`Keep it classic in the Nike Sportswear Essential Hoodie. 
            Made from soft, semi-brushed fleece, this laid-back look goes well with anything.`,
            details:`Semi-brushed fleece fabric has a soft, lightweight feel.
            Raglan sleeves.
            Ribbed hem and cuffs.
            Body: 80% cotton/20% polyester. 
            Hood lining: 100% cotton`,
            care:`Machine wash`,
        },
        {
            id: 33,
            description:`Made for layering, the Nike Dri-FIT UV Victory Top combines breathable, 
            stretchy fabric with a 1/2-length zipper so you can adjust your coverage on the fly.
            Dri-FIT technology helps you stay dry and comfortable. Breathable knit fabric has 
            plenty of stretch and a unique, mesh-like texture. Zipper guard at the top of the 
            collar feels soft against your skin.`,
            details:`Standard fit for a relaxed, easy feel.
            1/2-length zipper.
            100% polyester`,
            care:`Machine wash`,
        },
        {
            id: 34,
            description:`Craftsmanship and comfort. These adidas sneakers are the perfect balance. 
            The intricately designed knit upper is set on a comfortable rubber outsole. 
            Bounce cushioning adds springy support at the midsole. Style your pair with 
            distressed denim or workout leggings.
            Made with a series of recycled materials, this upper features at least 50% recycled content. 
            This product represents just one of our solutions to help end plastic waste.`,
            details:`Regular fit.
            Lace closure.
            Textile upper.
            Bounce midsole.
            Textile lining`,
            care:``,
        },
        {
            id: 35,
            description:`Put some spin on your look with these adidas Grand Court shoes. 
            An updated take on a classic tennis-inspired shape, they're made to flex with each step. 
            Cloudfoam cushioning gently holds your feet in place so you can wear them comfortably 
            right through to the evening. And even then, there's no missing the Colorful 3-Stripes.
            Made with a series of recycled materials, this upper features at least 50% recycled content. 
            This product represents just one of our solutions to help end plastic waste.`,
            details:`Regular fit.
            Lace closure.
            Synthetic leather upper.
            Cloudfoam sockliner.
            Textile lining`,
            care:``,
        },
        {
            id: 36,
            description:`The better your shoes feel, the more enjoyable your run. 
            These adidas shoes are designed to perform in all areas. They combine Bounce 
            at the heel with Bounce+ underfoot for a comfy, springy feel. 
            A light and airy upper sits on a sturdy grippy rubber outsole. 
            And while the molded heel fits snugly, the soft sockliner cushions your foot 
            stride after stride.
            Made with a series of recycled materials, this upper features at least 50% recycled content. 
            This product represents just one of our solutions to help end plastic waste.`,
            details:`Regular fit.
            Lace closure.
            Breathable mesh upper.
            Textile lining.
            Bounce midsole.
            Adibouncy EVA sockliner`,
            care:``,
        },
        {
            id: 37,
            description:`Experience a smooth run with the Ultra 4DFWD running shoes. 
            They combine the upper of our iconic Ultraboost with a 3D-printed adidas 4DFWD 
            midsole that's innovated to compress forward, reducing braking forces and transforming 
            the impact energy into forward motion. The result provides a smooth transition and 
            unique gliding experience. An adidas PRIMEKNIT upper hugs the foot with targeted areas 
            of support, while the Continental™ Rubber outsole provides extra grip in all weather 
            conditions.
            This shoe's upper is made with a high-performance yarn which contains at least 50% 
            Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, 
            beaches, coastal communities and shorelines, preventing it from polluting our ocean. 
            The other 50% of the yarn is recycled polyester.`,
            details:`Lace closure.
            adidas PRIMEKNIT textile upper.
            adidas 4D midsole.
            Textile lining.
            Weight: 13,5 ounces (size 9).
            Midsole drop: 12 mm (heel: 24 mm / forefoot: 12 mm)`,
            care:``,
        },
        {
            id: 38,
            description:`Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you'll 
            never look at your favorite pair of old racing shoes the same way again. 
            These rocket ships are made to help shave precious time off your personal 
            records without surrendering the foundation you need to go the full distance. 
            This electric design is inspired by the soul and rebellious spirit of Eugene, 
            Oregon—Tracktown USA—where contenders from all over the world test themselves 
            against the globe's greatest athletes.`,
            details:`Part of the Flyknit family—Atomknit material on the upper has a contoured fit while being lightweight and super-breathable.
            Specifically designed lofted heel pods use Flyknit yarns for secure, extended comfort and lightweight heel lockdown.
            The sole was designed using data from hundreds of runners. 
            It has different angles of traction placed where you need it, providing grip from foot-strike to toe-off.
            Notched laces offer a secure, but soft lace-up.
            An interrated knit tongue with lofted padding make for a secure, repeatable fit that helps reduce lace pressure`,
            care:``,
        },
        {
            id: 39,
            description:`The sock-like fit and lightweight feel of this Nike Free was made to 
            transition from running to training to your everyday routine. Made with at least 
            20% recycled content by weight, it combines the flexibility you love with a 
            contained design that will help keep you close to the ground for that barefoot feeling`,
            details:`The upper uses a breathable knit material throughout for a soft, stretchy feel. 
            It gives your foot room to stretch as you run.
            Flywire technology loops through the laces on the side for midfoot containment.
            The same cushioned heel you know and love from previous iterations of the Free provides comfortable support.
            A pull-tab at the heel provides easy on and off`,
            care:``,
        },
        {
            id: 40,
            description:`The Nike Juniper trail delivers a consistent ride for your your off-road runs.
            It's built for rocky trails,helping stay focused on the path ahead.Tough traxion 
            mixed with a lightweight design for tacking the rugged terrains.`,
            details:`Cushioning/Neutral.
            Solid Rubber.
            Internal Heel Counter.
            EVA Insole`,
            care:``,
        },
        {
            id: 41,
            description:`The Nike Pegasus Trail 4 GORE-TEX is made for those moments when you 
            don't want to turn back, no matter what. Feel confident even in the most unforeseen 
            weather conditions with waterproof GORE-TEX keeping you dry, so you can run harder 
            for longer and take your wet run from the road to the trail without breaking stride`,
            details:`Less rubber along the outsole creates a smoother transition from road to trail. 
            The rubber wraps around the front of the shoe for extra durability.
            The inspirational message by the heel will vary between "JUST DO IT" and "JUST RUN IT" depending on the shoe.
            Pull loops at heel and tongue`,
            care:``,
        },
        {
            id: 42,
            description:`Nike React Infinity Run Flyknit 3 offers you cushy responsiveness and 
            breathable support to help reduce injury and keep you running
            An advanced Flyknit upper provides breathability where you need it most`,
            details:`Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride.
            Increased rubber at the outsole helps deliver traction and durability.
            Cushioned collar provides soft comfort.
            Wide shape provides a more stable ride, helping release energy with every step`,
            care:``,
        },
    ]
}