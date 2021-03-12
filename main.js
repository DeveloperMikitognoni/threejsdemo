console.log("test")

//SCENE
const scene = new THREE.Scene();

//CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//RENDERE
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(10, 10, 10);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const geometry2 = new THREE.SphereGeometry(10, 10, 10);
const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.x = 30;
scene.add(sphere2);

const geometry3 = new THREE.SphereGeometry(10, 10, 10);
const material3 = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere3 = new THREE.Mesh(geometry3, material3);
sphere3.position.x = -30;
scene.add(sphere3);

camera.position.z = 50;

const domEvents = new THREEx.DomEvents(camera, renderer.domElement);

domEvents.addEventListener(sphere, 'click', event => {
    material.wireframe = false;
})

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 500;

const animate = () => {
    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);
}

animate()