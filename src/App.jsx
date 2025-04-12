import React, { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { InputTextarea } from "./components/InputTextarea";
import { InputCheckbox } from "./components/InputCheckbox";
import { InputRadio } from "./components/InputRadio";
import { InputFile } from "./components/InputFile";
import { InputSelect } from "./components/InputSelect";
import { Toggler } from "./components/InputToggler";
import { Tooltip } from "./components/Tooltip";
import { Modal } from "./components/Modal";
import { Toast } from "./components/Toast";
import { SkeletonLoader } from "./components/SkeletonLoader";

const Section = ({ title, description, children, code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="pt-2">{children}</div>
      <pre className="bg-gray-100 text-sm p-3 rounded overflow-x-auto whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
      <Button onClick={handleCopy} variant="outline">
        {copied ? "Copié !" : "Copier le code"}
      </Button>
    </div>
  );
};

function App() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [newsletter, setNewsletter] = useState(false);
  const [country, setCountry] = useState("");

  return (
    <div className="min-h-screen p-6 bg-gray-100 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        📘 Documentation des Composants React
      </h1>

      <Section
        title="Skeleton Loader"
        description="Utilisé pour indiquer un chargement en cours."
        code={`<SkeletonLoader width="w-3/4" height="h-5" />`}
      >
        <SkeletonLoader width="w-24" height="h-24" rounded="rounded-full" />
        <SkeletonLoader width="w-3/4" height="h-5" />
        <SkeletonLoader width="w-1/2" height="h-4" />
      </Section>

      <Section
        title="Input Text"
        description="Champ de saisie basique."
        code={`<Input label="Nom" value={text} onChange={e => setText(e.target.value)} />`}
      >
        <Input
          label="Nom"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Section>

      <Section
        title="Input Email et Password"
        description="Champs pour email et mot de passe."
        code={`<Input type="email" label="Email" />\n<Input type="password" label="Mot de passe" />`}
      >
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Mot de passe"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </Section>

      <Section
        title="Input Textarea"
        description="Zone de texte multiligne."
        code={`<InputTextarea label="Description" />`}
      >
        <InputTextarea label="Description" />
      </Section>

      <Section
        title="Checkbox, Radio, File"
        description="Champs d'options et de fichier."
        code={`<InputCheckbox label="J'accepte les CGU" />\n<InputRadio label="Homme" name="genre" />\n<InputFile label="Avatar" />`}
      >
        <InputCheckbox label="J'accepte les CGU" color="red" />
        <InputRadio label="Homme" name="genre" value="homme" />
        <InputFile label="Avatar" accept="image/*" />
      </Section>

      <Section
        title="Select"
        description="Liste déroulante."
        code={`<InputSelect label="Pays" value={country} onChange={setCountry} options={[{ label: 'France', value: 'fr' }]} />`}
      >
        <InputSelect
          label="Pays"
          value={country}
          onChange={setCountry}
          options={[
            { label: "France", value: "fr" },
            { label: "Madagascar", value: "mg" },
            { label: "Canada", value: "ca" },
          ]}
        />
      </Section>

      <Section
        title="Toggler"
        description="Bouton on/off."
        code={`<Toggler label="Recevoir la newsletter" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} />`}
      >
        <Toggler
          label="Recevoir la newsletter"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
      </Section>

      <Section
        title="Tooltip"
        description="Bulle d'information."
        code={`<Tooltip text="Ouvre le modal"><Button>Ouvrir Modal</Button></Tooltip>`}
      >
        <Tooltip text="Clique ici pour ouvrir un modal">
          <Button onClick={() => setIsModalOpen(true)}>Ouvrir Modal</Button>
        </Tooltip>
      </Section>

      <Section
        title="Button avec loader"
        description="Bouton avec animation de chargement."
        code={`<Button loading>Envoyer</Button>`}
      >
        <Button
          variant="primary"
          loading={true}
          onClick={() =>
            setToast({ message: "Formulaire envoyé !", type: "success" })
          }
        >
          Envoyer
        </Button>
      </Section>

      <Section
        title="Modal"
        description="Fenêtre modale avec actions."
        code={`<Modal isOpen={true}><p>Contenu</p></Modal>`}
      >
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Titre du Modal</h2>
          <p className="text-gray-700">Voici le contenu du modal...</p>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Fermer
            </Button>
            <Button onClick={() => alert("Confirmé !")}>Confirmer</Button>
          </div>
        </Modal>
      </Section>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          position="top-right"
        />
      )}
    </div>
  );
}

export default App;
