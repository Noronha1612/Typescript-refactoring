import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { useRef } from 'react';
import { Food } from '../../models/Food';

interface FormData {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface ModalEditFoodProps {
  handleUpdateFood: (food: Food) => void;
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: Food;
}

const ModalEditFood: React.FC<ModalEditFoodProps> = ({ setIsOpen, isOpen, handleUpdateFood, editingFood }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FormData) => {
    handleUpdateFood({ ...data, id: editingFood.id, available: editingFood.available });
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
