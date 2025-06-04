import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Configuração dos ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

// Estilos para o modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto'
  }
}

export default function ProjectsMap({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal(project) {
    setSelectedProject(project)
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <div style={{ height: '500px', width: '100%', position: 'relative' }}>
      <MapContainer
        center={[-15.7801, -47.9292]}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {projects.map((project) => (
          <Marker
            key={project.id}
            position={[project.location.latitude, project.location.longitude]}
            eventHandlers={{
              click: () => openModal(project),
            }}
          >
            <Popup>
              <div>
                <h3>{project.name}</h3>
                <p>{project.type} ({project.year})</p>
                <button onClick={() => openModal(project)}>Ver detalhes</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Modal de detalhes do projeto */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Detalhes do Projeto"
      >
        {selectedProject && (
          <div>
            <button onClick={closeModal} style={{ float: 'right' }}>X</button>
            <h2>{selectedProject.name}</h2>
            <p><strong>Tipo:</strong> {selectedProject.type}</p>
            <p><strong>Ano:</strong> {selectedProject.year}</p>
            <p><strong>Descrição:</strong> {selectedProject.description}</p>

            <h3>Detalhes Técnicos</h3>
            <ul>
              {Object.entries(selectedProject.details).map(([key, value]) => {
                // Não exibe imagens na lista (vamos mostrar depois)
                if (key === 'images') return null
                return (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              })}
            </ul>

            {selectedProject.details.images && selectedProject.details.images.length > 0 && (
              <>
                <h3>Imagens do Projeto</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.details.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.name} - Imagem ${index + 1}`}
                      style={{ maxWidth: '200px', maxHeight: '200px' }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </Modal> */}
    </div>
  )
}
