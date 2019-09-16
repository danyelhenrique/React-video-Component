import React, { useState } from "react";
import "./index.css";

export default function VideoDescriptionContent() {
  const [hiddenuseState, setHiddenuseState] = useState({ isHidden: true });
  function hiddenvideoBodyContent() {
    setHiddenuseState({ isHidden: !hiddenuseState.isHidden });
  }

  const setClassHidden = !!hiddenuseState.isHidden && "hidden-content";
  return (
    <div className={`videoBodyContent ${setClassHidden || ""}`}>
      <div className="videoBodyContent-items">
        <p>
          Music video by NX Zero, Chorão performing Cedo Ou Tarde - Projeto
          Paralelo. (C) 2011 Universal Music Ltda
        </p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          ipsum debitis aspernatur! Facere placeat, fugit impedit non temporibus
          nobis doloremque eius voluptatum dolor eos libero expedita ullam
          facilis suscipit quod? Voluptatem optio reiciendis dolorum natus?
          Dolores sunt voluptatibus iste rem repellendus facere alias
          perspiciatis officiis labore ad quod quidem dolor autem culpa velit,
          ratione adipisci atque est maiores id error. Repellendus cumque
          necessitatibus in laborum doloremque maxime quidem libero velit iure,
          voluptas autem perferendis recusandae, eligendi architecto blanditiis.
          Rerum architecto, sunt tempora ut magni quo libero quidem natus
          explicabo voluptate? Dolorem, facere est ex quia ipsum rem unde
          officiis incidunt aperiam modi ut quod consectetur? Optio expedita
          quisquam laboriosam nulla ad voluptatum, quibusdam doloremque numquam
          tenetur cumque voluptate recusandae quos. Quidem laboriosam eos at
          doloremque explicabo, optio asperiores magnam atque sed necessitatibus
          provident, ut rem reiciendis aliquam aut deleniti, expedita iure
          porro! Corporis, ducimus. Porro possimus nisi rem quo provident.
          Nulla, perspiciatis quae nam recusandae rem assumenda! Iure fugiat
          vero aspernatur obcaecati incidunt facilis sapiente eligendi labore
          error cum est consequatur sint fuga voluptas amet vel blanditiis,
          adipisci beatae at. Aperiam doloremque, odio voluptatum corrupti
          distinctio facere cupiditate repudiandae voluptatem nihil illo ratione
          similique doloribus fugiat consectetur, saepe repellendus nostrum
          eveniet iure. Accusantium distinctio fugiat possimus dolorum,
          perspiciatis beatae explicabo? Aspernatur vitae blanditiis sed numquam
          ea sunt ex magni tempora odit nesciunt dolore ipsam doloribus, non
          nihil asperiores! Voluptas tempore deserunt, nulla ex atque rem libero
          temporibus qui doloribus fuga! Distinctio dolor laborum eius
          accusantium dignissimos nisi sequi odit harum recusandae obcaecati?
          Ab, voluptatum. Facilis illo in magnam earum quos. Fugit earum neque
          laborum recusandae inventore laboriosam qui, placeat exercitationem.
          Animi nobis quasi dolores ipsam placeat doloremque fuga modi quia
          rerum magni quae, rem cum. Illo doloribus commodi, aperiam tempore
          numquam eos nulla harum minima nesciunt! Ad odio repellat distinctio!
          Facere, quibusdam ducimus! Distinctio velit facilis, cumque ex commodi
          temporibus eligendi illum odit alias natus quasi maiores deleniti,
          reiciendis, culpa nemo minus provident placeat laborum suscipit sunt
          repudiandae aliquam saepe! Laudantium, velit! Odio a sapiente sit? Ad
          nisi nesciunt quisquam quis in voluptate, autem mollitia nostrum saepe
          atque expedita doloribus fugit corporis est ut et dicta perferendis
          quidem officiis ipsum! Porro debitis eos aspernatur in voluptatem
          reprehenderit, eaque, blanditiis accusantium esse consequuntur minima
          doloribus libero magnam commodi adipisci voluptatum rem delectus quas!
          Ab illo alias aperiam explicabo esse. Modi, corporis. Eum corrupti
          commodi autem quaerat recusandae quod asperiores ducimus omnis
          distinctio illum nesciunt necessitatibus fugit eius, voluptates sequi
          dignissimos quis adipisci inventore laudantium sint earum suscipit
          ullam repudiandae. Corrupti, numquam! Ullam aspernatur, laudantium
          aperiam reprehenderit, est quas perspiciatis, ea voluptates doloremque
          minus accusantium. Fugit, illo cupiditate quibusdam natus architecto
          tempore similique alias consectetur eligendi modi! Facilis obcaecati
          beatae voluptatum voluptates. Placeat id rem praesentium repudiandae
          nesciunt qui neque hic asperiores, animi velit quis. Iure, accusantium
          adipisci aliquid facilis expedita iusto commodi maxime doloremque
          nesciunt error quis officia qui quae voluptatem. Modi cupiditate rem,
          sequi dolore perferendis quo eligendi tenetur quia mollitia aut fugit
          dolor odio, quos possimus odit dolorum, est consectetur? Voluptatem ea
          voluptatum in ipsa quas perspiciatis. Illum, nulla! Itaque aperiam
          odit eveniet officiis praesentium quasi quas ut, rem ratione, animi
          ea? Veniam, dolore doloribus nulla nesciunt corporis blanditiis,
          eligendi earum deserunt accusamus, voluptas eos vero tempora
          voluptatibus aliquam. Rerum nulla sequi laudantium culpa dolor!
          Laudantium fuga minus voluptatum, atque tenetur neque odio corporis
          sapiente, illo quibusdam omnis explicabo voluptatem corrupti! Quidem
          amet at aspernatur totam earum enim soluta. Adipisci omnis suscipit
          impedit enim soluta, optio nobis nesciunt eos dignissimos ad
          exercitationem? In, labore dolorem? Dolores inventore, fugiat
          consequuntur culpa rerum perferendis dolore asperiores, illo
          repellendus ullam voluptates sint. Blanditiis minima aut harum,
          dolorum at tempore cumque velit animi veritatis in nostrum est
          repellat dolor omnis laudantium eaque rerum ratione. Itaque sapiente
          harum distinctio veritatis, voluptas nemo repudiandae eveniet! Ratione
          facilis, laudantium ipsa asperiores magnam doloribus facere modi sequi
          excepturi earum labore at alias itaque tempora laborum quidem commodi
          obcaecati optio blanditiis voluptate temporibus? Cupiditate nesciunt
          quae maxime architecto! Ad incidunt dolore fugiat! Delectus sed
          voluptatum a unde, dolores corporis fuga facilis quaerat ea.
          Reiciendis fugit ullam veritatis omnis tenetur, ratione a possimus
          voluptatum repellat nulla non doloribus eligendi. Ex dolore impedit
          perspiciatis sapiente sunt blanditiis vero soluta nostrum architecto
          minima, incidunt distinctio veritatis recusandae quisquam voluptate
          illo quo fugit reprehenderit consectetur velit fuga omnis totam.
          Magnam, esse rerum! Doloremque, consequatur. Quaerat ipsum quas
          reprehenderit iste voluptas repudiandae nisi unde cumque ut. Fuga
          voluptate suscipit aspernatur optio a laudantium blanditiis repellat
          alias porro! Neque reprehenderit enim repudiandae cum doloremque.
          Tenetur fugiat qui aspernatur sed, voluptas veniam, quidem error rerum
          odit, mollitia nemo suscipit repudiandae accusamus ducimus eius.
          Reprehenderit ipsam magnam officia debitis corrupti nobis a est aut
          cupiditate alias! Adipisci sequi repellat consectetur dolores facilis,
          deserunt reiciendis necessitatibus ipsum voluptatibus, vel, molestias
          consequatur nam fuga? Natus illo officiis ex expedita ipsum cum
          eveniet similique? Ad minima in quisquam sapiente. Doloribus vero id
          mollitia quae, dicta dolorum suscipit eligendi voluptatibus animi
          aliquid aperiam corporis minus recusandae, voluptates quos, sunt eum
          excepturi architecto? Porro tenetur nesciunt laborum, nulla illo unde
          ratione. Totam harum fuga molestias aut numquam quia ex laborum eius
          a. Dolorum nemo, quos fugiat laborum perspiciatis obcaecati eius
          praesentium temporibus libero explicabo tempora iste veritatis
          distinctio velit, quae ipsam. Veritatis ab blanditiis omnis itaque
          eligendi. Quo cum neque velit optio libero voluptatibus repudiandae
          suscipit quisquam harum inventore eum et impedit distinctio, dolor
          error modi quaerat commodi necessitatibus sapiente iusto. Officiis,
          hic quaerat. Aut exercitationem nam, commodi est unde consequatur ad
          aliquam sapiente at porro a voluptatibus vitae quo beatae corrupti
          iste quas assumenda minima dolores. Cupiditate voluptatem culpa
          corrupti. Fugiat molestias voluptate non tempora deleniti molestiae
          eius dolores eos esse. Aut dolorem est recusandae totam impedit optio,
          ut corrupti nihil culpa excepturi, aliquid fugiat neque iste
          blanditiis, fuga ad. Optio corporis velit aspernatur quo voluptas non
          ut! Dolorum esse, iusto, voluptas nihil voluptatibus iure eveniet eius
          unde, doloribus inventore ducimus recusandae a necessitatibus aliquid
          amet repellat iste tempora vero? Quia quae repellendus repellat
          provident corporis sunt ea, nostrum, amet optio nemo sed itaque.
          Aliquid velit reiciendis esse possimus provident quasi nam molestiae
          corrupti! Harum sapiente voluptate dolorum assumenda! Voluptate! Illo,
          ea, quidem dolorem non dolores aliquam enim repudiandae nulla
          quibusdam quis sed dicta pariatur provident deleniti veniam facere sit
          eos harum, voluptatibus excepturi vitae quas. Pariatur totam inventore
          nemo? Veritatis sunt magnam doloribus enim voluptates at quasi
          mollitia incidunt cum beatae. Quis laboriosam repellat ad quaerat
          incidunt repellendus placeat quas ut culpa perspiciatis, rem dicta
          dolor nemo autem adipisci. Praesentium porro voluptatum ea vitae!
          Illum nam ut quisquam ullam cupiditate illo cum nihil doloribus minima
          laudantium adipisci pariatur delectus eaque quidem, nulla sint
          excepturi accusamus assumenda labore aspernatur! Reprehenderit?
          Similique vel exercitationem ea eveniet sit, voluptates, minima
          suscipit dignissimos ipsum reprehenderit iste quis praesentium
          deleniti, voluptatibus blanditiis tempora doloremque facilis quidem
          aliquam velit quisquam esse quibusdam iusto doloribus? Perferendis.
          Aliquam quod consectetur asperiores architecto soluta eligendi, quasi
          porro maiores perferendis, sequi illum sapiente. Maiores, ipsum
          aperiam? Ducimus numquam, repellat excepturi mollitia cumque
          voluptate, aspernatur cupiditate, consequuntur unde necessitatibus
          explicabo. Accusamus quos porro repellat ipsum? Ea natus alias, quasi
          in quibusdam atque, nemo perspiciatis possimus odio perferendis fuga
          porro nulla necessitatibus repellat culpa voluptatum animi sit
          adipisci corrupti, ex obcaecati? Incidunt est deserunt voluptatem,
          vitae impedit neque maiores, amet minus exercitationem quo natus iure.
          Veniam soluta nostrum neque sit dolor perspiciatis, omnis ducimus
          repudiandae, vel deleniti, quibusdam inventore non totam! Dolorem at
          libero inventore veritatis debitis, rem voluptatum repudiandae veniam
          consectetur iure commodi. Saepe ab enim corrupti! Assumenda, expedita
          eum, suscipit reprehenderit ducimus maiores dolorem officia culpa quae
          similique veniam? Omnis cupiditate nihil nobis in voluptas dolorem
          nostrum officia itaque debitis totam nam, fugiat praesentium aut?
          Cupiditate, ipsam maxime corporis tempora modi ipsum fugiat ab est
          molestiae, quod iusto dolor! Nostrum consequatur omnis fuga velit
          dolor sit enim quasi non ab? Qui tempora sint assumenda maiores soluta
          quae dicta earum, suscipit cumque excepturi voluptates eius tenetur
          maxime commodi necessitatibus neque? Iusto sit ducimus totam
          repudiandae facilis explicabo minima non pariatur? Dolores sequi
          adipisci voluptatum laudantium animi blanditiis. Ducimus temporibus
          obcaecati veniam ipsum fuga ab repudiandae, porro, vitae ratione
          consequatur ut!
        </span>
        <button onClick={() => hiddenvideoBodyContent()}>SHOW MORE</button>
      </div>
    </div>
  );
}
