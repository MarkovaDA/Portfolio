import type { ProjectTranslation } from '../types'

export const projectsEn: Record<string, ProjectTranslation> = {
  'drawing-board': {
    title: 'Drawing Board',
    description: 'Virtual drawing board similar to Miro',
    fullDescription: `Interactive web application built with TypeScript, Pixi.js, and CanvasKit (Skia) for drawing and editing scenes with PDF export.
      <p>
        <br />
        <b>
          Application features:
        </b>
      </p>

      <ul>
        <li>displays several prepared scenes (demo, shapes, lines);</li>
        <li>supports manual scene switching and auto-switching;</li>
        <li>allows dragging objects with the mouse;</li>
        <li>adds random shapes to the active scene;</li>
        <li>clears the canvas;</li>
        <li>exports the current scene to PDF;</li>
        <li>syncs the right preview panel with the Pixi scene;</li>
        <li>supports drag interaction from the right Skia panel via pointer event proxying.</li>
      </ul>
    `,
    slots: {
      main: {
        label: 'Main application screen',
        summary:
          'The interface consists of a top control panel and two canvas panels below: an interactive Pixi scene on the left and its Skia preview on the right. PDF export, add/clear shapes, and scene switching are available.',
      },
    },
  },
  'file-manager': {
    title: 'File Manager',
    description: 'File manager built with React',
    fullDescription: `
     A learning React project that combines file explorer functionality: a folder tree on the left, the contents of the selected directory on the right, and a resizable divider between them.
     Files and folders can be created via the context menu.
     <p>
      <br />
      <b>
        Key features:
      </b>
     </p>
     <ul>
        <li>Folder tree (TreeView):
        Displays the nested project structure.
        Expand and collapse folders on click.
        Highlight the selected node.
        Keyboard support: activate a node with Enter and Space.
        Icons for folders and files (Material UI Icons) with color coding by file type.
        </li>
        <li>File explorer (FileExplorer):
        Shows the contents of the selected folder as tiles.
        Displays an empty state when the folder has no items.
        File and folder icons consistent with the tree on the left.
        </li>
        <li>Context menu:
        Opens on right-click in the explorer area.
        Options: "Create file" and "Create folder".
        Closes on click outside the menu or on Escape.
        Implemented via the useContextMenu hook.
        </li>
        <li>Creating files and folders:
        Name is entered via the standard window.prompt.
        Validation for empty names.
        Duplicate check in the current folder (case-insensitive).
        New items appear immediately in the tree and file list.
        </li>
        <li>Panel divider (SplitView):
        The screen is split into left and right areas.
        The left panel width can be adjusted by dragging the divider.
        Minimum panel sizes are set to keep the interface readable.
        </li>
      </ul>
    `,
    slots: {
      main: {
        label: 'Main application screen',
        summary:
          'The interface consists of two areas. On the left — a folder tree; on the right — the contents of the selected folder. The divider between them can be dragged. Right-click in the right panel to create a file or folder.',
      },
    },
  },
  'barbie-model': {
    title: '3D Barbie Model',
    description: 'Interactive 3D scene with Three.js and Vite for viewing a Barbie 3D model',
    fullDescription: `
    ThreeJSBarbieModel is a web application for interactively viewing Barbie and other female character 3D models in the browser. Built with Three.js and Vite, it simulates a display scene: the character stands on a white podium in a dimly lit space with soft lighting, and the user can rotate the camera around the model and switch movement modes.
    <br />
    <p>
      <i>*The project is under development</i>
    </p>
    <p>
        <b>
          Key features:
        </b>
      </p>
      <ul>
        <li>Interactive 3D scene with Three.js</li>
        <li>Vite for project bundling</li>
        <li>Display scene simulation with a character on a podium</li>
        <li>Camera rotation around the model</li>
        <li>Character movement mode switching</li>
        <li>GLB model support</li>
        <li>Material system for the model</li>
        <li>Character walk animation</li>
        <li>Model preparation pipeline for Mixamo</li>
    `,
    slots: {
      main: {
        label: 'Main application screen',
        summary: 'The interface consists of a 3D scene and a control panel',
      },
    },
  },
  worklog: {
    title: 'WorkLog',
    description: 'Web application for tracking completed work on a construction site',
    fullDescription: `
        The system lets you keep records with date, work type, volume, unit of measurement, and assignee: view them in a table, filter and sort by date, add, edit, and delete entries. The work type directory is loaded from JSON.
        Locally it can be run via npm or Docker Compose; in production on GitHub Pages only the frontend with demo data is available.
      `,
    slots: {
      main: {
        label: 'Main application screen',
        summary: 'The interface consists of a records table and a work type directory',
      },
      add: {
        label: 'New record form',
        summary:
          'Form for adding a new record with fields for date, work type, volume, unit of measurement, and assignee',
      },
    },
  },
  'travel-app': {
    title: 'Travel App',
    description:
      'A web editor for travelers to highlight countries and place markers on a map, set their names, colors, and descriptions. Data is saved locally in the user\'s browser.',
    fullDescription: `
      A single-page web application for working with an interactive map.
      Users can create and edit country regions, add markers with icons and labels,
      and control map zoom via the context menu and control panel.
    `,
    slots: {
      main: {
        label: 'Main application screen',
        summary: 'The interface consists of a map and a control panel',
      },
    },
  },
  'landing-page': {
    title: 'Landing Page',
    description: 'Landing page example',
    fullDescription: `
      Responsive landing page for the "Club of Four Horses" based on a Figma design: HTML/CSS/JS layout, carousels, marquee, and scroll animations.
    `,
    slots: {},
  },
}
